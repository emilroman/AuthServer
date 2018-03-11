using AuthServer.Models.RegisterAccount;
using Microsoft.AspNetCore.Mvc;

namespace AuthServer.Controllers
{
    public class RegisterAccountController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View(new RegisterAccountViewModel());
        }
    }
}