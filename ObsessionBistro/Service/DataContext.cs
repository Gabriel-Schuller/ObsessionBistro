using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using ObsessionBistro.Data.Entities;

namespace ObsessionBistro.Service
{
    public class DataContext : DbContext
    {
        private readonly IConfiguration _config;

        public DataContext(DbContextOptions options, IConfiguration config) : base(options)
        {
            _config = config;
        }

        //public DbSet<Address> Addresses{ get; set; }  ---- To add after Address task becomes unblocked
        public DbSet<Ingredient> Ingredients { get; set; }

        public DbSet<Product> Products { get; set; }


    }
}
