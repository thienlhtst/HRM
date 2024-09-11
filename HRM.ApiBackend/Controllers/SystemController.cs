using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HRM.Entity.Enums;
using HRM.Services.Catalog.Systems;

namespace HRMApiBackend.Controllers
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

        [HttpGet("ChildLanguage")]
        public async Task<IActionResult> GetChildLanguage([FromQuery] string FunctionId, [FromQuery] language language)
        {
            var result = await _systemManagementService.GetNavManagement(language, FunctionId);
            return Ok(result);
        }

        [HttpGet("MenuLanguage")]
        public async Task<IActionResult> GetMenuLanguage([FromQuery] string FunctionId, [FromQuery] language language)
        {
            var result = await _systemManagementService.GetMenuManagement(language, FunctionId);
            return Ok(result);
        }
    }
}