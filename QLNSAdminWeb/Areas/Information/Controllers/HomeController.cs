using Microsoft.AspNetCore.Mvc;

namespace QLNSAdminWeb.Areas.Information.Controllers
{
    [Area("Information")]
	[Route("Information/[controller]/[action]")]
	public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
    }
}
