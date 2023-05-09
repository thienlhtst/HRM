using Microsoft.AspNetCore.Mvc;

namespace QLNSApiBackend.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
