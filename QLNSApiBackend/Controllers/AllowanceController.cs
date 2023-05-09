using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using QLNS.Services.Catalog.Allowance;
using QLNS.ViewModel.Catalogs.Allowance;

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
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] AllowanceCreateRequest request)
        {
            var allowance = await _allowanceService.Create(request);
            return Ok(new { token = allowance });
        }

        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update([FromRoute] string id, [FromForm] AllowanceEditRequest request)
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
    }
}
