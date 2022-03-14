using System;
using System.Threading.Tasks;

namespace ObsessionBistro.Service.Repositories
{
    public class BaseRepository : IBaseRepository
    {
        private readonly DataContext _context;

        public BaseRepository(DataContext context)
        {
            this._context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }


        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
    }
}
