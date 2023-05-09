using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using QLNS.Services.Catalog.Days;
using QLNS.Services.Catalog.Days.Dtos.Manage;

namespace QLNS.BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DayController : ControllerBase
    {
        private readonly IPublicDayService _publicDayService;
        private readonly IManageDayService _manageDayService;
        public DayController(IPublicDayService publicDayService, IManageDayService manageDayService) {
            _publicDayService = publicDayService;
            _manageDayService = manageDayService;

        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var days = await _publicDayService.GetAll();
            return Ok(days);
        }
        [HttpGet("public-paging")]
        public async Task<IActionResult> Get([FromQuery] GetPagingDayRequest request)
        {
            var days = await _publicDayService.GetAllByCategoryID(request);
            return Ok(days);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(int id)
        {
            var day = await _manageDayService.GetById(id);
            if (day == null)
                return BadRequest("Cannot find Day");
            return Ok(day);
        }
        [HttpPost]
        public async Task<IActionResult> Create([FromForm]DayCreateRequest request)
        {
            var dayid = await _manageDayService.Create(request);
            if (dayid == 0)
                return BadRequest();
            var day = await _manageDayService.GetById(dayid);
            return CreatedAtAction(nameof(GetByID), new { ID = dayid },day);
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var affectedResult = await _manageDayService.Delete(id);
            if (affectedResult == 0)
                return BadRequest();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromForm] DayUpdateRequest request)
        {
            var affectedResult = await _manageDayService.Update(request);
            if (affectedResult == 0)
                return BadRequest();
            return Ok();
        }


        [HttpPut("name/{id}/{newName}")]
        public async Task<IActionResult> UpdateName([FromQuery] int id, string newName)
        {
            var isSuccessful = await _manageDayService.UpdateName(id, newName);
            if (isSuccessful)
                return Ok();
            return BadRequest();

        }
    }
}
