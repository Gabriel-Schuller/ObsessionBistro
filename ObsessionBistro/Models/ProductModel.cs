using System.ComponentModel.DataAnnotations;

namespace ObsessionBistro.Models
{
    public class ProductModel
    {
        [Required]
        [StringLength(30, MinimumLength = 5)]
        public string Name { get; set; }
        [Required]
        [StringLength(1000, MinimumLength = 10)]
        public string Description { get; set; }
        [Required]
        [StringLength(500, MinimumLength = 5)]
        public string Ingredients { get; set; }

        public string Category { get; set; } = "Diverse";
        public int Price { get; set; }
    }
}
