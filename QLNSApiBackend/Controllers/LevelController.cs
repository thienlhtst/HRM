using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Ranks;
using QLNS.ViewModel.Catalogs.Levels;
using QLNS.ViewModel.Dtos;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {
        private readonly ILevelService _Service;
        private readonly IMapper _mapper;
        private readonly QLNSDbContext _context;

        public LevelController(ILevelService Service, IMapper mapper,QLNSDbContext context)
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


        [HttpGet("Mapper")]
        public async Task<IActionResult> Gett()
        {
            var list = await _Service.GetList();
            var level = _mapper.Map<List<LevelViewModel>>(list);
            return Ok(level);
        }

        

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LevelCreateRequest request)
        {
            var level = _mapper.Map<Level>(request);
            _context.Levels.Add(level);
            await _context.SaveChangesAsync();
            return Ok(level);
        }

        [HttpPut]
        public async Task<IActionResult> Update(string id, [FromBody] LevelEditRequest request)
        {
            request.ID = id;
            var level = _mapper.Map<Level>(request);
            _context.Levels.Update(level);
            await _context.SaveChangesAsync();
            return Ok(level);
        }


        [HttpGet("{rankID}")]
        public async Task<IActionResult> GetById(string rankID)
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
        public async Task<IActionResult> Delete(string id)
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