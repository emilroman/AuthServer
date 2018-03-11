using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    public class Logon : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}