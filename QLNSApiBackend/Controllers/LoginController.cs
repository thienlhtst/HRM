using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.Employees;
using QLNS.Services.Catalog.Login;
using QLNS.ViewModel.Systems;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly  ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet("all")]
        public async Task<IActionResult> Get()
        {
            var model = await _loginService.GetAll();
            return Ok(model);
        }
        [HttpPost("loginweb")]
        [AllowAnonymous]
        public async Task<IActionResult> Author(LoginModel loginModel)
        {
            var model = await _loginService.Login(loginModel);
            return Ok(model);
        }
    }
}
