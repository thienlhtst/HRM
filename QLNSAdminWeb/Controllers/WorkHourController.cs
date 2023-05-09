using API;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.ViewModel.Catalogs.WorkHour;

namespace QLNSAdminWeb.Controllers
{
    public class WorkHourController : BaseController
    {
        private readonly IWorkHourAPIService _workHourAPIService;

        public WorkHourController(IWorkHourAPIService workHourAPIService)
        {
            _workHourAPIService = workHourAPIService;
        }

        // GET: WorkHourController
        public async Task<ActionResult> Index(string keyword, int pageIndex = 1, int pageSize = 10)
        {
            var request = new GetWorkHourAllPage()
            {
                Keyword = keyword,
                PageIndex = pageIndex,
                PageSize = pageSize
            };
            if (TempData["result"] != null)
            {
                ViewBag.SuccessMsg = TempData["result"];
            }
            var data = await _workHourAPIService.GetWorkHourPagings(request);
            return View(data);
        }

        // GET: WorkHourController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: WorkHourController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: WorkHourController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: WorkHourController/Edit/5
        public async Task<ActionResult> Edit(int id)
        {
            var data = await _workHourAPIService.GetById(id);
            return View(data);
        }

        // POST: WorkHourController/Edit/5
        [HttpPost]
        [Consumes("multipart/form-data")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([FromForm] WorkHourUpdateRequest request)
        {
            if (!ModelState.IsValid)
                return View(request);
            var result = await _workHourAPIService.UpdateAll(request);
            if (result)
            {
                TempData["result"] = "Cập nhật sản phẩm thành công";
                return RedirectToAction("Index");
            }

            ModelState.AddModelError("", "Cập nhật sản phẩm thất bại");
            return View(request);
        }

        [HttpGet]
        public ActionResult Delete(int id)
        {
            return View(new WorkHourDeleteRequest()
            {
                ID = id
            });
        }

        // POST: WorkHourController/Delete/5
        [HttpPost]
        public async Task<IActionResult> Delete(WorkHourDeleteRequest request)
        {
            if (!ModelState.IsValid)
                return View();

            var result = await _workHourAPIService.DeleteById(request.ID);
            if (result)
            {
                TempData["result"] = "Xóa sản phẩm thành công";
                return RedirectToAction("Index");
            }

            ModelState.AddModelError("", "Xóa không thành công");
            return View(request);
        }
    }
}