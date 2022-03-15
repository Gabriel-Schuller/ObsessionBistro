using System.ComponentModel.DataAnnotations;

namespace ObsessionBistro.Models
{
    public class UserModel
    {

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        public string EmailAddress { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
