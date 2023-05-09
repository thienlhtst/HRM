using API;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Systems;
using QLNSAdminWeb.Models;
using System.Security.Claims;

namespace QLNSAdminWeb.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILoginAPIService _loginAPIService;
        private readonly IEmployeeAPIClient _employeeAPIClient;
        private readonly IWorkHourAPIService _workHourAPIService;

        public LoginController(ILoginAPIService loginAPIService, IWorkHourAPIService workHourAPIService,
            IEmployeeAPIClient employeeAPIClient)
        {
            _employeeAPIClient = employeeAPIClient;
            _loginAPIService = loginAPIService;
            _workHourAPIService = workHourAPIService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            ViewBag.nguyen = 0;
            return View();
        }

        public IActionResult information()
        {
            var data = TempData["ID"] as string;
            ViewBag.ID = data;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(LoginModel loginModel)
        {
            ViewBag.nguyen = 0;
            var result = await _loginAPIService.LoginUser(loginModel);
            if (result == null)
            {
                ViewBag.nguyen = -1;
                return View();
            }
            if (result.RankRole == "2")
            {
                TempData["ID"] = result.ID;
                ViewBag.nguyen = 1;
                var claims = new List<Claim>
                 {
                    new Claim(ClaimTypes.Name, result.ID),
                };
                var identity = new ClaimsIdentity(claims, "login");
                var principal = new ClaimsPrincipal(identity);
                HttpContext.Session.SetString("1", result.ID);
                await HttpContext.SignInAsync(principal);
                return View();
            }
            if (result.RankRole == "1")
            {
                TempData["ID"] = result.ID;
                return RedirectToAction("Index", "Information", new { area = "Information" });
            }

            // TempData["ktr"] = -1;
            ViewBag.nguyen = -1;
            return View();
            // return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult TimeKeeper()
        {
            if (TempData["result"] != null)
            {
                ViewBag.content = TempData["content"] as string;
                ViewBag.result = TempData["result"] as string;
            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> TimeKeeper(Timekeeper timekeeper, string submitType)
        {
            DateTime now = DateTime.Now;
            timekeeper.Day = now.Day;
            timekeeper.Hour = now.Hour;
            timekeeper.Year = now.Year;
            timekeeper.Month = now.Month;
            timekeeper.Minute = now.Minute;

            if (submitType.Equals("checkin"))
            {
                CheckinModel model = new CheckinModel();
                model.EmployeesID = timekeeper.EmployeesID;
                model.LBDID = "1";
                model.Day = timekeeper.Day;
                model.Month = timekeeper.Month;
                model.Year = timekeeper.Year;
                model.HourCheckin = timekeeper.Hour;
                model.MinuteCheckin = timekeeper.Minute;
                var result = await _workHourAPIService.Checkin(model);
                if (result)
                {
                    ViewBag.result = 1;
                    ViewBag.mes = " Check in Successed";
                    return View();
                }
                ViewBag.result = -1;

                return View(timekeeper);
            }
            if (submitType.Equals("checkout"))
            {
                CheckoutModel model = new CheckoutModel();
                model.EmployeesID = timekeeper.EmployeesID;
                model.Day = timekeeper.Day;
                model.Month = timekeeper.Month;
                model.Year = timekeeper.Year;
                model.HourCheckout = timekeeper.Hour;
                model.MinuteCheckout = timekeeper.Minute;
                var result = await _workHourAPIService.Checkout(model);
                if (result)
                {
                    ViewBag.result = 1;
                    ViewBag.mes = " Check out Successed";
                    return View();
                }
                ViewBag.result = -1;
                return View(timekeeper);
            }

            return View(timekeeper);
        }
    }
}