using System;
using System.Collections.Generic;

namespace ObsessionBistro.Data.Entities
{
    public class Ingredient
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
