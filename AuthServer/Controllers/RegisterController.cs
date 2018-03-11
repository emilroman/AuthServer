using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    public class RegisterController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}