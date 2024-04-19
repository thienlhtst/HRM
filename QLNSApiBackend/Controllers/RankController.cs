using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.Ranks;
using QLNS.ViewModel.Catalogs.Levels;
using QLNS.ViewModel.Dtos;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RankController : ControllerBase
    {
        private readonly ILevelService _rankService;

        public RankController(ILevelService rankService)
        {
            _rankService = rankService;
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPage([FromQuery] GetRankPagingRequest request)
        {
            var rank = await _rankService.GetAllPage(request);
            return Ok(rank);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var list = await _rankService.GetList();
            return Ok(list);
        }

        [HttpGet("{rankID}")]
        public async Task<IActionResult> GetById(string rankID)
        {
            var rank = await _rankService.GetById(rankID);
            if (rank == null)
                return BadRequest("Cannot find Rank");
            return Ok(rank);
        }

        [HttpGet("Ed/{rankID}")]
        public async Task<IActionResult> GetByIdForEdit(string rankID)
        {
            var rank = await _rankService.GetByIdForEdit(rankID);
            if (rank == null)
                return BadRequest("Cannot find Rank");
            return Ok(rank);
        }

        [HttpGet("GetRoleList")]
        public async Task<IActionResult> GetRoleList()
        {
            var role = await _rankService.GetRoleList();
            return Ok(role);
        }

        [HttpPost("createrank")]
        public async Task<IActionResult> Create([FromBody] RankCreateRequest rankCreateRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var rankID = await _rankService.Create(rankCreateRequest);
            if (rankID == 0)
            {
                return BadRequest(ModelState);
            }
            return Ok( rankID );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] RankEditRequest request)
        {
            request.ID = id;
            var rank = await _rankService.Update(request);
            return Ok(rank);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await _rankService.DeleteRankByProcedure(id);

            return Ok();
        }
    }
}