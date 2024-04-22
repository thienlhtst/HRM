using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using QLNS.Services.Catalog.Allowance;
using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Catalogs.AllowanceRules;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AllowanceController : ControllerBase
    {
        private readonly IAllowanceService _allowanceService;
        private readonly ILogger<AllowanceController> _logger;
        private readonly IMapper _mapper;
        public AllowanceController(IAllowanceService allowanceService, ILogger<AllowanceController> logger,IMapper mapper)
        {
            _allowanceService = allowanceService;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _allowanceService.GetList();
            return Ok(model);
        }

        [HttpGet("Mapper")]
        public async Task<IActionResult> GetMapper()
        {
            var model = await _allowanceService.GetList();
            var returnAllowance = _mapper.Map<GetAllowanceResponse>(model);

            return Ok(returnAllowance);
        }

        [HttpGet("{AllowanceID}")]
        public async Task<IActionResult> GetByID(string AllowanceID)
        {
            var allowance = await _allowanceService.GetByID(AllowanceID);
            return Ok(allowance);
        }

        [HttpPost("createallowance")]
        public async Task<IActionResult> Create([FromBody] AllowanceCreateRequest request)
        {
            var allo = await _allowanceService.Create(request);
            return Ok(allo);
        }

        [HttpPost("createallowancerules")]
        public async Task<IActionResult> CreateAllowanceRules([FromBody] List<AllowanceRulesCreateViewModel> request)
        {
            var allowancerules = await _allowanceService.CreateAllowanceRules(request);
            return Ok(allowancerules);
        }

        /*[HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] AllowanceEditRequest request)
        {
            request.ID = id;
            var allowance = await _allowanceService.Update(request);
            return Ok(allowance);
        }*/



        /*[HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _allowanceService.Delete(id);
            return Ok(result);
        }*/

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
    }
}