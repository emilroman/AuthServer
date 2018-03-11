using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}