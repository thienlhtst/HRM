using Microsoft.AspNetCore.Mvc;
using QLNS.Services.Satistics;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Catalogs.WorkHour;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatisticController : ControllerBase
    {
        private readonly IStatisticWorkHourService _StatisticWorkHourService;
        public StatisticController(IStatisticWorkHourService statisticWorkHourService) 
        {
            _StatisticWorkHourService = statisticWorkHourService;
        }


        [HttpGet("paging")]
        public async Task<IActionResult> GetAllpage([FromQuery] GetStatisticAllPage request)
        {
            var workhour = await _StatisticWorkHourService.GetallPage(request);

            return Ok(workhour);
        }
        [HttpGet]
		public async Task<IActionResult> GetAll(int month,int year)
		{
			var workhour = await _StatisticWorkHourService.GetAll(month,year);
			return Ok(workhour);
		}
	}
}
