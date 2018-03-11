using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    public class LogonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}