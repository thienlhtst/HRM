using API;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using QLNS.ViewModel.Catalogs.EmployeesWithAllowances;
using Microsoft.VisualBasic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace QLNSAdminWeb.Controllers
{
    public class EmployeeWithAllowanceController : BaseController
    {
        private readonly IEmployeesWithAllowancesAPIService _ewa;
        private readonly IAllowanceAPIClient _allowanceAPIClient;

        public EmployeeWithAllowanceController(IEmployeesWithAllowancesAPIService ewa, IAllowanceAPIClient allowanceAPIClient)
        {
            _ewa = ewa;
            _allowanceAPIClient = allowanceAPIClient;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetEmployeesWithAllowancesPaging()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _ewa.GetEWAPaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        public async Task<IActionResult> EwaToday(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetEwaRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize,
                date = DateTime.Now
            };
            var data = await _ewa.GetEWANowPaging(request);
            var allo = await _allowanceAPIClient.GetAll();
            ViewBag.Allowance = allo.Select(x => new SelectListItem()
            {
                Text = x.Name,
                Value = x.ID
            });
            if (TempData["result"] != null)
                ViewBag.result = TempData["result"] as string;
            return View(data);
        }

        [HttpGet]
        public async Task<IActionResult> auto(string AllowanceName)
        {
            var t = new EwaAutoCheckRequest()
            {
                AllowanceID = AllowanceName,
                Day = DateTime.Now.Day,
                Month = DateTime.Now.Month,
                Year = DateTime.Now.Year,
            };
            var result = await _ewa.auto(t);
            if (result)
            {
                TempData["result"] = "Success";
                return RedirectToAction("ewatoday");
            }
            TempData["result"] = "fail";
            return RedirectToAction("ewatoday");
        }
    }
}