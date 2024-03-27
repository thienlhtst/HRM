using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Catalog.LabourDay;
using QLNS.Services.Catalog.LabourHours;
using QLNS.ViewModel.Catalogs.LabourDays;
using QLNS.ViewModel.Catalogs.LabourHours;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabourHourController : ControllerBase
    {
        private readonly ILabourHourService _labourhourService;

        public LabourHourController(ILabourHourService labourDayService)
        {
            _labourhourService=labourDayService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _labourhourService.GetList();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetbyID(string id)
        {
            var result = await _labourhourService.GetbyID(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LabourHourCreateRequest request)
        {
            var result = await _labourhourService.Create(request);
            return Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody] LabourHourUpdateRequest request)
        {
            var result = await _labourhourService.Edit(request);
            return Ok(result);
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete([FromQuery] LabourHourDeleteRequest request)
        {
            var result = await _labourhourService.Delete(request);
            return Ok(result);
        }
    }
}