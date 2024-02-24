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
        private readonly IStatisticSalaryService _statisticSalaryService;

        public StatisticController(IStatisticWorkHourService statisticWorkHourService, IStatisticSalaryService statisticSalaryService)
        {
            _StatisticWorkHourService = statisticWorkHourService;
            _statisticSalaryService = statisticSalaryService;
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllpage(int month, int year)
        {
            var workhour = await _StatisticWorkHourService.GetallPage(month, year);

            return Ok(workhour);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(int month, int year)
        {
            var workhour = await _StatisticWorkHourService.GetAll(month, year);
            return Ok(workhour);
        }

        [HttpGet("week")]
        public async Task<IActionResult> GetAllWeeks(int month, int year)
        {
            var result = await _StatisticWorkHourService.GetAllWeeksinMonth(month, year);
            return Ok(result);
        }

        [HttpGet("month")]
        public async Task<IActionResult> GetAllMonths(int year)
        {
            var result = await _StatisticWorkHourService.GetAllMonthinYear(year);
            return Ok(result);
        }

        [HttpGet("employeeoff")]
        public async Task<IActionResult> GetEmployeeOff(string date)
        {
            var result = await _StatisticWorkHourService.GetemployeesinWeek(date);
            return Ok(result);
        }

        [HttpGet("salarypaging")]
        public async Task<IActionResult> GetAllSalaryPaging([FromQuery] GetStatisticAllPage request)
        {
            var result = await _statisticSalaryService.GetAllPage(request);
            return Ok(result);
        }

        [HttpGet("topsalary")]
        public async Task<IActionResult> GetTopSalary(int top)
        {
            var result = await _statisticSalaryService.TopSalary(top);
            return Ok(result);
        }

        [HttpGet("monthlyinyear")]
        public async Task<IActionResult> GetSalaryMonthInYear(int year)
        {
            var result = await _statisticSalaryService.SalaryInYear(year);
            return Ok(result);
        }
    }
}