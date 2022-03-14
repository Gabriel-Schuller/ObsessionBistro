using System;
using System.Collections.Generic;

namespace ObsessionBistro.Data.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public int Price { get; set; }

    }
}
