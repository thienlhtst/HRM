using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting.Internal;
using QLNS.Services.Catalog.Employees;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.WEB.Models;
using System.Diagnostics;
using System.Security.AccessControl;

namespace QLNS.WEB.Controllers
{
	public class HomeController : Controller
	{

		private  IEmployeeService _employeeService;
		private IWebHostEnvironment _hostingEnvironment;
		public HomeController(IEmployeeService employeeService, IWebHostEnvironment hostingEnvironment) 
		{
			_employeeService = employeeService;
			_hostingEnvironment = hostingEnvironment;
		}

		

		public IActionResult Index()
		{
			ViewBag.thien = "asdasdasd";
			
			return View();
		}
		public IActionResult Liss()
		{
            var  model =  _employeeService.GetAll();
            return View(model);
        }
		
		public IActionResult Register()
		{
			return View();
		}
		[HttpPost]
		public  IActionResult Register(EmployeeCreateRequest employeeCreateRequest)
		{ 
			var a =	_employeeService.Create(employeeCreateRequest);
			//ViewBag.ra = employeeCreateRequest.FirstName;
			return View("Privacy", employeeCreateRequest);
		}

		[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
		public IActionResult Error()
		{
			return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
		}
	}
}