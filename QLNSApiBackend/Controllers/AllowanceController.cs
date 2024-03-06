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

        public AllowanceController(IAllowanceService allowanceService)
        {
            _allowanceService = allowanceService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _allowanceService.GetList();
            return Ok(model);
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
            var allowance = await _allowanceService.Create(request);
            return Ok(new { token = allowance });
        }

        [HttpPost("createallowancerules")]
        public async Task<IActionResult> CreateAllowanceRules([FromBody] AllowanceRulesCreateViewModel request)
        {
            var allowancerules = await _allowanceService.CreateAllowanceRules(request);
            return Ok(new { token = allowancerules });
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
            return Ok();
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetAllowancePagingRequest request)
        {
            var allowance = await _allowanceService.GetAllPage(request);
            return Ok(allowance);
        }

        [HttpGet("rulespaging")]
        public async Task<IActionResult> GetRulesPaging([FromQuery] GetAllowanceRulesPagingRequest request)
        {
            var rules = await _allowanceService.GetAllPageRules(request);
            return Ok(rules);
        }
    }
}