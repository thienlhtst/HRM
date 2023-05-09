using API;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNSAdminWeb.Models;
using System.Diagnostics;

namespace QLNSAdminWeb.Controllers
{
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IWorkHourAPIService _workHourAPIService;

        public HomeController(ILogger<HomeController> logger, IWorkHourAPIService workHourAPIService)
        {
            _workHourAPIService = workHourAPIService;
            _logger = logger;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetWorkHourAllPage()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };

            var data = await _workHourAPIService.GetAllHome(request);
            return View(data);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            HttpContext.Session.Remove("1");
            return RedirectToAction("Index", "Login");
        }
    }
}