using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using ObsessionBistro.Helpers;
using ObsessionBistro.Service;

namespace ObsessionBistro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        private readonly IBaseRepository _baseRepository;
        private readonly JwtService _jwtService;
        private readonly LinkGenerator _linkGenerator;

        public UsersController(IUserRepository repository, LinkGenerator linkGenerator, IMapper mapper,
                                IBaseRepository baseRepository, JwtService service)
        {
            this._repository = repository;
            this._linkGenerator = linkGenerator;
            this._mapper = mapper;
            this._baseRepository = baseRepository;
            this._jwtService = service;
        }


    }
}
