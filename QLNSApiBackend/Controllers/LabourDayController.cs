using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.LabourDay;
using QLNS.ViewModel.Catalogs.LabourDays;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabourDayController : ControllerBase
    {
        private readonly ILabourDayService _labourDayService;

        public LabourDayController(ILabourDayService labourDayService)
        {
            _labourDayService=labourDayService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _labourDayService.GetList();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyID(string id)
        {
            var result = await _labourDayService.GetbyID(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LabourDayCreateRequest request)
        {
            var result = await _labourDayService.Create(request);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody] LabourDayUpdateRequest request)
        {
            var result = await _labourDayService.Edit(request);
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromQuery] LabourDayDeleteRequest request)
        {
            var result = await _labourDayService.Delete(request);
            return Ok(result);
        }
    }
}