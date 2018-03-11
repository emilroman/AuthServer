using System.ComponentModel.DataAnnotations;

namespace AuthServer.Models.RegisterAccount
{
    public class RegisterAccountViewModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        [Compare(nameof(ConfirmPassword))]
        public string Password { get; set; }

        [Required]
        public string ConfirmPassword { get; set; }
    }
}