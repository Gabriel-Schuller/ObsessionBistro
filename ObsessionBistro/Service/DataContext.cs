using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace ObsessionBistro.Service
{
    public class DataContext : DbContext
    {
        private readonly IConfiguration _config;

        public DataContext(DbContextOptions options, IConfiguration config) : base(options)
        {
            _config = config;
        }
    }
}
