using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Entity.Enums;
using QLNS.Services.Catalog.Systems;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SystemController : ControllerBase
    {
        private readonly ISystemManagementService _systemManagementService;

        public SystemController(ISystemManagementService systemManagementService)
        {
            _systemManagementService = systemManagementService;
        }

        [HttpGet("{FunctionId}")]
        public async Task<IActionResult> Get(string FunctionId, [FromQuery] language language)
        {
            var result = await _systemManagementService.GetSystemManagement(language, FunctionId);
            return Ok(result);
        }

        [HttpGet("Language")]
        public async Task<IActionResult> GetLanguage([FromQuery] string FunctionId, [FromQuery] language language)
        {
            var result = await _systemManagementService.GetLanguage(language, FunctionId);
            return Ok(result);
        }
    }
}