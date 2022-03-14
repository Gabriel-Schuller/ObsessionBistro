using Microsoft.EntityFrameworkCore;
using ObsessionBistro.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObsessionBistro.Service.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;

        public ProductRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<List<Product>> GetAllAsync()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<Product> GetById(Guid id)
        {
            return await _context.Products.FindAsync(id);
        }

        public async Task<Product> GetByName(string productName)
        {
            return await _context.Products.FirstOrDefaultAsync(p => p.Name == productName);
        }

        public async Task<List<Product>> GetByPartialWord(string productName)
        {
            IQueryable<Product> query = _context.Products.Where(c => c.Name.Contains(productName));
            return await query.ToListAsync();
        }
    }
}
