using API;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace QLNSAdminWeb.Controllers
{
    public class EmployeeController : BaseController
    {
        private readonly IEmployeeAPIClient _employeeAPIClient;
        private readonly IRankAPIService _rankAPIService;
        private readonly IPositionAPIService _positionAPIService;

        public EmployeeController(IEmployeeAPIClient employeeAPIClient, IRankAPIService rankAPIService,
            IPositionAPIService positionAPIService)
        {
            _employeeAPIClient = employeeAPIClient;
            _rankAPIService = rankAPIService;
            _positionAPIService = positionAPIService;
        }

        [HttpGet]
        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            int a = -1;
            var request = new GetEmployeePagingRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            if (TempData["result"] != null)
            {
                ViewBag.SuccessMsg = TempData["result"];
            }
            ViewBag.Keyword = keyword;
            var data = await _employeeAPIClient.GetEmployeePaging(request);
            return View(data);
        }

        [HttpGet]
        public async Task<IActionResult> Detail(string ID)
        {
            var model = await _employeeAPIClient.GetById(ID);
            return View(model);
        }

        [HttpGet]
        public async Task<IActionResult> Sreach(string Id)
        {
            ViewBag.Id = Id;
            if (!string.IsNullOrEmpty(Id))
            {
                var employee = await _employeeAPIClient.GetById(Id);
                return View("Sreach", new EmployeeModel()
                {
                    EmployeeViewModel = employee
                });
            }
            else
            {
                return View("information");
            }
        }

        public async Task<IActionResult> Create()
        {
            var positions = await _positionAPIService.GetAll();
            ViewBag.Position = positions.Select(x => new SelectListItem()
            {
                Text = x.Name,
                Value = x.IDposition,
            });
            var ranks = await _rankAPIService.GetAll();
            ViewBag.Rank = ranks.Select(x => new SelectListItem()
            {
                Text = x.Name,
                Value = x.IDrank,
            });
            return View();
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] EmployeeCreateRequest employeeCreateRequest)
        {
            var result = await _employeeAPIClient.Create(employeeCreateRequest);
            if (result)
            {
                TempData["result"] = "Success";
                return RedirectToAction("Index");
            }
            ModelState.AddModelError("", $"Them  thất bại {employeeCreateRequest.ID}");
            var positions = await _positionAPIService.GetAll();
            ViewBag.Position = positions.Select(x => new SelectListItem()
            {
                Text = x.Name,
                Value = x.IDposition,
            });
            var ranks = await _rankAPIService.GetAll();
            ViewBag.Rank = ranks.Select(x => new SelectListItem()
            {
                Text = x.Name,
                Value = x.IDrank,
            });
            return View(employeeCreateRequest);
        }

        [HttpGet]
        public async Task<IActionResult> Update(string ID)
        {
            var data = await _employeeAPIClient.GetByIdEdit(ID);
            return View(data);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Update([FromForm] EmployeeEditRequest employeeEditRequest)
        {
            var result = await _employeeAPIClient.Update(employeeEditRequest);
            if (result)
            {
                TempData["result"] = "Success";
                return RedirectToAction("Index");
            }

            ModelState.AddModelError("", $"Cập nhật Nhan Vien thất bại {employeeEditRequest.Active}");
            return View(employeeEditRequest);
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new EmployeeDeleteViewModel()
            {
                ID = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(EmployeeDeleteViewModel request)
        {
            var result = await _employeeAPIClient.Delete(request.ID);
            if (result)
            {
                TempData["result"] = "Success";
                return RedirectToAction("Index");
            }
            return View(request);
        }
    }
}