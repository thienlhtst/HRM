using API;
using Microsoft.AspNetCore.Mvc;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNSAdminWeb.Models;
using System.Drawing.Printing;

namespace QLNSAdminWeb.Controllers
{
    public class StatisticController : BaseController
    {
        private readonly IStatisticAPIService _statisticAPIService;
        private readonly IEmployeeAPIClient _employeeAPIClient;

		public StatisticController(IStatisticAPIService statisticAPIService,IEmployeeAPIClient employeeAPIClient)
        {
            _employeeAPIClient = employeeAPIClient;
            _statisticAPIService = statisticAPIService;
        }
        public async Task<IActionResult> Index(int Month =-1,int year=-1 )
        {

            if (Month == -1 && year == -1) {
                Month = DateTime.Now.Month;
                year = DateTime.Now.Year;
            }
            if (TempData["result"] != null)
            {
                ViewBag.SuccessMsg = TempData["result"];
            }
            ViewBag.Month = Month; ViewBag.Year = year;
            SatisticWorkhourModel data = new SatisticWorkhourModel()
            {
                EmployeeModel = await _employeeAPIClient.GetAll(),
                WorkhourStatistics = await _statisticAPIService.GetPage(Month,year),
                total=0
            };
			CompareDateTime da = new CompareDateTime();
			ViewBag.Day =da.CompareDay(Month,year);
            return View(data);
        }
    }
}
