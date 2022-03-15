using AutoMapper;
using ObsessionBistro.Data.Entities;
using ObsessionBistro.Models;

namespace ObsessionBistro.Data
{
    public class BistroProfile : Profile
    {
        public BistroProfile()
        {
            this.CreateMap<Product, ProductModel>().ReverseMap();
            this.CreateMap<User, UserModel>().ReverseMap();
        }
    }
}
