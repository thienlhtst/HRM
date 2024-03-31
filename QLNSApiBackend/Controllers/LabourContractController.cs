using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.LabourContract;
using QLNS.ViewModel.Catalogs.LabourContract;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabourContractController : ControllerBase
    {
        private readonly ILabourContractService _labourContractService;
        public LabourContractController(ILabourContractService labourContractService)
        {
            _labourContractService = labourContractService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model =await _labourContractService.GetList();
            return Ok(model);
        }

        [HttpPost("CreateLabourContract")]
        public async Task<IActionResult> Create([FromBody] LabourContractCreateRequest request)
        {
            var labour = await _labourContractService.Create(request);
            return Ok(labour);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(string id)
        {
            var lb = await _labourContractService.GetByID(id);
            return Ok(lb);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] string id,[FromBody] LabourContractEditRequest request)
        {
            request.ID = id;
            var lb = await _labourContractService.Update(request);
            return Ok(lb);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetLabourContractPagingRequest request)
        {
            var lb = await _labourContractService.GetAllPage(request);
            return Ok(lb);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _labourContractService.Delete(id);
            return Ok(result);
        }

    }
}
