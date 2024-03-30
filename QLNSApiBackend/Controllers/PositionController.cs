using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.Positions;
using QLNS.Services.Catalog.Positions.Dtos.Manage;

namespace QLNS.BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private readonly IManagePositionService _managePositionService;

        public PositionController(IManagePositionService managePositionService)
        {
            _managePositionService = managePositionService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var days = await _managePositionService.GetAll();
            return Ok(days);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> Get([FromQuery] GetPagingPositionRequest request)
        {
            var days = await _managePositionService.GetAllPaging(request);
            return Ok(days);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(string id)
        {
            var day = await _managePositionService.GetByID(id);
            if (day == null)
                return BadRequest("Cannot find Position");
            return Ok(day);
        }

        [HttpPost("createposition")]
        public async Task<IActionResult> Create([FromBody] PositionCreateRequest request)
        {
            var position = await _managePositionService.Create(request);
            return Ok( position);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var affectedResult = await _managePositionService.Delete(id);
            if (affectedResult == 0)
                return BadRequest();
            return Ok(affectedResult);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id,[FromBody] PositionUpdateRequest request)
        {
            request.ID = id;
            var affectedResult = await _managePositionService.Update(request);
            if (affectedResult == 0)
                return BadRequest();
            return Ok(affectedResult);
        }
    }
}