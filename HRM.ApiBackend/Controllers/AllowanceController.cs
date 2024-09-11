using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Services.Catalog.Allowance;
using HRM.ViewModel.Catalogs.Allowance;
using HRM.ViewModel.Catalogs.AllowanceRules;

namespace HRMApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllowanceController : ControllerBase
    {
        private readonly IAllowanceService _allowanceService;
        private readonly ILogger<AllowanceController> _logger;
        private readonly IMapper _mapper;
        private readonly HRMDbContext _context;

        public AllowanceController(IAllowanceService allowanceService, ILogger<AllowanceController> logger, IMapper mapper, HRMDbContext context)
        {
            _allowanceService = allowanceService;
            _logger = logger;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetMapper()
        {
            var model = await _allowanceService.GetList();
            var returnAllowance = _mapper.Map<List<AllowanceViewModel>>(model);

            return Ok(returnAllowance);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAllowance([FromBody] AllowanceCreateRequest request)
        {
            var newAllo = _mapper.Map<Allowance>(request);
            _context.Allowances.Add(newAllo);
            await _context.SaveChangesAsync();
            return Ok(newAllo);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAllowance(int id, [FromBody] AllowanceEditRequest request)
        {
            request.ID = id;
            var newAllo = _mapper.Map<Allowance>(request);
            _context.Allowances.Update(newAllo);
            await _context.SaveChangesAsync();
            return Ok(newAllo);
        }

        [HttpGet("{AllowanceID}")]
        public async Task<IActionResult> GetByID(string AllowanceID)
        {
            var allowance = await _allowanceService.GetByID(AllowanceID);
            return Ok(allowance);
        }

        [HttpPost("createallowancerules")]
        public async Task<IActionResult> CreateAllowanceRules([FromBody] List<AllowanceRulesCreateViewModel> request)
        {
            var allowancerules = await _allowanceService.CreateAllowanceRules(request);
            return Ok(allowancerules);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProcedure(string id)
        {
            await _allowanceService.DeleteAllowanceAndRulesByProcedure(id);
            return Ok();
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetAllowancePagingRequest request)
        {
            var allowance = await _allowanceService.GetAllPage(request);
            return Ok(allowance);
        }

        [HttpGet("rules")]
        public async Task<IActionResult> GetRulesPaging()
        {
            var rules = await _allowanceService.GetAllRules();
            return Ok(rules);
        }

        /*
          [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _allowanceService.GetList();
            return Ok(model);
        }

          [HttpPost("createallowance")]
       public async Task<IActionResult> Create([FromBody] AllowanceCreateRequest request)
       {
           var allo = await _allowanceService.Create(request);
           return Ok(allo);
       }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] AllowanceEditRequest request)
        {
            request.ID = id;
            var allowance = await _allowanceService.Update(request);
            return Ok(allowance);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _allowanceService.Delete(id);
            return Ok(result);
        }*/
    }
}