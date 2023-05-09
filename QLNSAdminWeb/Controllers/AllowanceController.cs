using API;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using QLNS.ViewModel.Catalogs.Allowance;

namespace QLNSAdminWeb.Controllers
{
    public class AllowanceController : BaseController
    {
        private readonly IAllowanceAPIClient _allowanceAPIClient;

        public AllowanceController(IAllowanceAPIClient allowanceAPIClient)
        {
            _allowanceAPIClient = allowanceAPIClient;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetAllowancePaging()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _allowanceAPIClient.GetAllowancePaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] AllowanceCreateRequest request)
        {
            var result = await _allowanceAPIClient.Create(request);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new AllowanceDeleteRequest()
            {
                ID = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(AllowanceDeleteRequest request)
        {
            var allowance = await _allowanceAPIClient.Delete(request.ID);
            if (allowance)
            {
                return RedirectToAction("Index");
            }
            return View(request);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(string id)
        {
            var allowance = await _allowanceAPIClient.GetByIdForEdit(id);
            return View(allowance);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit([FromForm] AllowanceEditRequest request)
        {
            var result = await _allowanceAPIClient.Update(request);
            if (result) return RedirectToAction("Index");
            return View(request);
        }

        public async Task<IActionResult> Details(string id)
        {
            var reuslt = await _allowanceAPIClient.GetByID(id);
            return View(new AllowanceDetailRequest()
            {
                allowance = reuslt
            });
        }
    }
}