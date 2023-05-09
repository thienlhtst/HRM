using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.Ranks;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Dtos;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RankController : ControllerBase
    {
        private readonly IRankService _rankService;

        public RankController(IRankService rankService)
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
        [HttpPost("createrank")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] RankCreateRequest rankCreateRequest)
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
            return Ok(new { token = rankID });
        }

        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update([FromRoute] string id, [FromForm] RankEditRequest request)
        {
            request.IDrank = id;
            var rank = await _rankService.Update(request);
            return Ok(rank);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var affectedResult = await _rankService.Delete(id);
            if (affectedResult == 0)
                return BadRequest();
            return Ok();
        }
    }
}