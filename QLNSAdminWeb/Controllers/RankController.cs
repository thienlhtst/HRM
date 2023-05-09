using API;
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Dtos;
using QLNSAdminWeb.Models;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;
using System.Drawing.Printing;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.CodeAnalysis.Elfie.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace QLNSAdminWeb.Controllers
{
    public class RankController : BaseController
    {
        private readonly IRankAPIService _rankAPIService;

        public RankController(IRankAPIService rankAPIService)
        {
            _rankAPIService = rankAPIService;
        }

        [HttpGet]
        public async Task<IActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetRankPagingRequest()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            var data = await _rankAPIService.GetRankPaging(request);
            ViewBag.Keyword = keyword;
            return View(data);
        }

        public async Task<IActionResult> Details(string id)
        {
            var result = await _rankAPIService.GetById(id);
            return View(new RankDetailRequest()
            {
                rank = result
            });
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Delete(string id)
        {
            return View(new RankDeleteRequest()
            {
                IDrank = id
            });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(RankDeleteRequest request)
        {
            var rank = await _rankAPIService.Delete(request.IDrank);
            if (rank)
            {
                TempData["result"] = "Xóa sản phẩm thành công";
                return RedirectToAction("Index");
            }
            return View(request);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> Create([FromForm] RankCreateRequest rankCreateRequest)
        {
            var result = await _rankAPIService.Create(rankCreateRequest);
            if (result)
            {
                TempData["result"] = "Success";
                return RedirectToAction("Index");
            }
            return View(result);
        }

        [HttpGet]
        public async Task<IActionResult> Edit(string id)
        {
            var rank = await _rankAPIService.GetByIdForEdit(id);
            return View(rank);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit([FromForm] RankEditRequest rankEditRequest)
        {
            var result = await _rankAPIService.Update(rankEditRequest);
            if (result)
            {
                TempData["result"] = "Update Successfully";
                return RedirectToAction("Index");
            }
            ModelState.AddModelError(" ", "Noob");
            return View(rankEditRequest);
        }
    }
}