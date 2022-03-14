using ObsessionBistro.Data.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ObsessionBistro.Service
{
    public interface IProductRepository
    {
        Task<Product> GetByName(string productName);
        Task<List<Product>> GetByPartialWord(string productName);
        Task<Product> GetById(Guid id);

        Task<List<Product>> GetAllAsync();
    }
}
