using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using NuGet.Common;
using QLNS.Services.Catalog.Employees;
using QLNS.Services.Catalog.Login;
using QLNS.ViewModel.JwtOptions;
using QLNS.ViewModel.Systems;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.CodeAnalysis.Scripting;
using Org.BouncyCastle.Crypto.Generators;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _loginService;
        private IConfiguration _configuration;

        public LoginController(ILoginService loginService, IConfiguration configuration)
        {
            _loginService = loginService;
            _configuration = configuration;
        }

        [HttpGet("all")]
        public async Task<IActionResult> Get()
        {
            var model = await _loginService.GetAll();
            return Ok(model);
        }

        [HttpPost()]
        [AllowAnonymous]
        public async Task<IActionResult> Author([FromBody] LoginModel loginModel)
        {
            var model = await _loginService.Login(loginModel);
            return Ok(model);
        }

        [HttpGet, Authorize]
        public ActionResult<string> GetName()
        {
            var userName = User.FindFirstValue(ClaimTypes.Name);
            var role = User.FindFirstValue(ClaimTypes.Role);
            var id = User.FindFirstValue(ClaimTypes.Actor);
            return Ok(new { userName, role, id });
        }
    }
}