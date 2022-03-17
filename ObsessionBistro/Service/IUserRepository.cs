using ObsessionBistro.Data.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ObsessionBistro.Service
{
    public interface IUserRepository
    {
        Task<User> GetById(Guid id);


        Task<List<User>> GetAllUsersAsync();
        Task<List<User>> GetAllAdministratorsAsync();


        
        Task<User> GetUserByEmail(string email);

        //ToDo - add on next sprint the ability for admin to pick an user and all its orders
    }
}
