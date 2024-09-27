using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Services.Catalog.Ranks;
using HRM.ViewModel.Catalogs.Levels;
using HRM.ViewModel.Dtos;

namespace HRMApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {
        private readonly ILevelService _Service;
        private readonly IMapper _mapper;
        private readonly HRMDbContext _context;

        public LevelController(ILevelService Service, IMapper mapper, HRMDbContext context)
        {
            _Service = Service;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPage([FromQuery] GetLevelPagingRequest request)
        {
            var rank = await _Service.GetAllPage(request);
            return Ok(rank);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var list = await _Service.GetList();
            var level = _mapper.Map<List<LevelViewModel>>(list);
            return Ok(level);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LevelCreateRequest request)
        {
            var level = await _Service.Create(request);
            return Ok(level);
        }

        [HttpPut]
        public async Task<IActionResult> Update(int id, [FromBody] LevelEditRequest request)
        {
            request.ID = id;
            var level = await _Service.Update(request);
            return Ok(level);
        }

        [HttpGet("{rankID}")]
        public async Task<IActionResult> GetById(int rankID)
        {
            var rank = await _Service.GetById(rankID);
            if (rank == null)
                return BadRequest("Cannot find Rank");
            return Ok(rank);
        }

        [HttpGet("Ed/{rankID}")]
        public async Task<IActionResult> GetByIdForEdit(string rankID)
        {
            var rank = await _Service.GetByIdForEdit(rankID);
            if (rank == null)
                return BadRequest("Cannot find Rank");
            return Ok(rank);
        }

        [HttpGet("GetRoleList")]
        public async Task<IActionResult> GetRoleList()
        {
            var role = await _Service.GetRoleList();
            return Ok(role);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _Service.DeleteRankByProcedure(id);

            return Ok();
        }

        /*

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var list = await _Service.GetList();
            return Ok(list);
        }

        [HttpPost("createrank")]
        public async Task<IActionResult> Create([FromBody] LevelCreateRequest rankCreateRequest)
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
        public async Task<IActionResult> Update(string id, [FromBody] LevelEditRequest request)
        {
            request.ID = id;
            var rank = await _rankService.Update(request);
            return Ok(rank);
        }

         */
    }
}