using API;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Salary;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace QLNSAdminWeb.Controllers
{
    public class SalaryController : BaseController
    {
        private readonly ISalaryAPIService _employeeAPIService;

        public SalaryController(ISalaryAPIService employeeAPIService)
        {
            _employeeAPIService = employeeAPIService;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetSalaryPagingRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _employeeAPIService.GetSalaryPaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        /*public async Task<IActionResult> Index(string keyword, int pageIndex = 1,int pageSize=10)
        {
            var request = new GetSalaryPagingRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _employeeAPIService.GetSalaryPagings(request);
            return View(data);
        }*/

        // [HttpGet]

        public async Task<IActionResult> Details(string id)
        {
            var result = await _employeeAPIService.GetById(id);
            return View(new SalaryDetailRequest()
            {
                salary = result
            });
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new SalaryDeleteRequest()
            {
                ID = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(SalaryDeleteRequest request)
        {
            var employee = await _employeeAPIService.Delete(request.ID);
            if (employee)
            {
                TempData["result"] = "Xóa sản phẩm thành công";
                return RedirectToAction("Index");
            }
            return View(request);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] SalaryCreateRequest employeeCreateRequest)
        {
            var result = await _employeeAPIService.Create(employeeCreateRequest);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public async Task<IActionResult> Edit(string id)
        {
            var employee = await _employeeAPIService.GetByIdForEdit(id);
            return View(employee);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit([FromForm] SalaryEditRequest employeeEditRequest)
        {
            var result = await _employeeAPIService.Update(employeeEditRequest);
            if (result)
            {
                TempData["result"] = "Update Successfully";
                return RedirectToAction("Index");
            }
            ModelState.AddModelError(" ", "Noob");
            return View(employeeEditRequest);
        }
    }
}