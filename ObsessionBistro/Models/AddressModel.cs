using System.ComponentModel.DataAnnotations;

namespace ObsessionBistro.Models
{
    public class AddressModel
    {
        [Required]
        public string Judet { get; set; }
        [Required]
        public string Strada { get; set; }
        [Required]
        public string Numar { get; set; }
        [Required]
        public string Bloc { get; set; }
        public string Scara { get; set; }
        public string Etaj { get; set; }
        public string Apartament { get; set; }
    }
}
