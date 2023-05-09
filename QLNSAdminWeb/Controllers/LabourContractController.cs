using API;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using QLNS.ViewModel.Catalogs.LabourContract;

namespace QLNSAdminWeb.Controllers
{
    public class LabourContractController : BaseController
    {
        private readonly ILabourContractAPIService _labourcontractAPIService;

        public LabourContractController(ILabourContractAPIService labourcontractAPIService)
        {
            _labourcontractAPIService = labourcontractAPIService;
        }

        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetLabourContractPaging()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _labourcontractAPIService.GetLabourPaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] LabourContractCreateRequest request)
        {
            var result = await _labourcontractAPIService.Create(request);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new LabourContractDeleteRequest()
            {
                ID = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(LabourContractDeleteRequest request)
        {
            var labour = await _labourcontractAPIService.Delete(request.ID);
            if (labour) return RedirectToAction("Index");
            return View(request);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(string id)
        {
            var labour = await _labourcontractAPIService.GetByIdForEdit(id);
            return View(labour);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit([FromForm] LabourContractEditRequest request)
        {
            var result = await _labourcontractAPIService.Update(request);
            if (result) return RedirectToAction("Index");
            return View(request);
        }

        public async Task<IActionResult> Details(string id)
        {
            var result = await _labourcontractAPIService.GetById(id);
            return View(new LabourContractDetailRequest()
            {
                labour = result
            });
        }
    }
}