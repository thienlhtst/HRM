using Microsoft.AspNetCore.Mvc;

namespace HRMApiBackend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
