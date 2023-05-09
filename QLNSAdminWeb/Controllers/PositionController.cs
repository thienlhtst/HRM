using API;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs;
using QLNS.Services.Catalog.Positions.Dtos.Manage;
using QLNS.Services.Catalog.Positions.Dtos;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace QLNSAdminWeb.Controllers
{
    public class PositionController : BaseController
    {
        private readonly IPositionAPIService _employeeAPIService;

        public PositionController(IPositionAPIService employeeAPIService)
        {
            _employeeAPIService = employeeAPIService;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetPagingPositionRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _employeeAPIService.GetPositionPaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        /*public async Task<IActionResult> Index(string keyword, int pageIndex = 1,int pageSize=10)
        {
            var request = new GetPositionPagingRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _employeeAPIService.GetPositionPagings(request);
            return View(data);
        }*/

        // [HttpGet]

        public async Task<IActionResult> Details(string id)
        {
            var result = await _employeeAPIService.GetById(id);

            return View(new PositionDetailRequest()
            {
                position = result
            });
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new PositionDeleteRequest()
            {
                ID = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(PositionDeleteRequest request)
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
        public async Task<IActionResult> Create([FromForm] PositionCreateRequest employeeCreateRequest)
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
        public async Task<IActionResult> Edit([FromForm] PositionUpdateRequest employeeEditRequest)
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