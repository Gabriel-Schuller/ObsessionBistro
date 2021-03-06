using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using ObsessionBistro.Data.Entities;
using ObsessionBistro.Helpers;
using ObsessionBistro.Models;
using ObsessionBistro.Service;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ObsessionBistro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]

    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        private readonly IBaseRepository _baseRepository;
        private readonly JwtService _jwtService;
        private readonly LinkGenerator _linkGenerator;

        public UsersController(IUserRepository repository, LinkGenerator linkGenerator, IMapper mapper,
                                IBaseRepository baseRepository, JwtService jwtService)
        {
            _repository = repository;
            _linkGenerator = linkGenerator;
            _mapper = mapper;
            _baseRepository = baseRepository;
            _jwtService = jwtService;
        }

        [HttpGet]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            try
            {
                var users = await _repository.GetAllUsersAsync();

                return users;
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
        }
        
        [HttpGet("/all-admins")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<List<User>>> GetAllAdmins()
        {
            try
            {
                var users = await _repository.GetAllAdministratorsAsync();

                return users;
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
        }

        [HttpGet("{userID}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<UserModel>> Get(Guid userID, bool makeAdmin= false)
        {
            try
            {
                var result = await _repository.GetById(userID);
                if (result == null)
                {
                    return this.NotFound();
                }
                if (makeAdmin)
                {
                    result.Role = "Administrator";
                    if (await _baseRepository.SaveChangesAsync())
                    {
                        return _mapper.Map<UserModel>(result);
                    }

                }
                return _mapper.Map<UserModel>(result);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");

            }
        }

        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<ActionResult<UserModel>> Post([FromBody] UserModel model)
        {

            var existing = await _repository.GetUserByEmail(model.EmailAddress);

            if (existing != null) return BadRequest("User already in use");

            try
            {
                var user = _mapper.Map<User>(model);
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

                _baseRepository.Add(user);

                if (await _baseRepository.SaveChangesAsync())
                {
                    var location = _linkGenerator.GetPathByAction("Get", "Users", new { userID = user.Id });

                    if (string.IsNullOrWhiteSpace(location))
                    {
                        return BadRequest("Could not use current id");
                    }

                    return Created(location, _mapper.Map<UserModel>(user));

                }

            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");

            }

            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<ActionResult<UserModel>> Login(UserModel model)
        {
            try
            {
                var user = await _repository.GetUserByEmail(model.EmailAddress);
                if (user == null) return BadRequest(new { message = "User doesn't exist" });

                if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                {
                    return BadRequest(new { message = "User doesn't exist" });
                }

                var jwt = _jwtService.Generate(user);

                Response.Cookies.Append("jwt", jwt, new CookieOptions
                {
                    Secure = true,
                    HttpOnly = true,
                    IsEssential = true,
                    Expires = DateTime.Now.AddMonths(1),
                    SameSite = SameSiteMode.None

                });

                return Ok(_mapper.Map<UserModel>(user));
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
        }

        [HttpGet("logout")]
        public IActionResult Logout()
        {
            //Response.Cookies.Delete("jwt" , new CookieOptions
            //{
            //    Secure = true,
            //    HttpOnly = true,
            //    IsEssential = false,
            //    Expires = DateTime.Now.AddMonths(1),
            //    SameSite = SameSiteMode.None

            //});
            Response.Cookies.Append("jwt", "", new CookieOptions()
            {
                Expires = DateTime.Now.AddDays(-1)
            });

            return Ok();
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult<UserModel>> Put(Guid id, UserModel model)
        {
            try
            {
                var oldUser = await _repository.GetById(id);
                if (oldUser == null)
                {
                    return NotFound("User with the specified id does not exist");
                }
                _mapper.Map(model, oldUser);

                if (await _baseRepository.SaveChangesAsync())
                {
                    return _mapper.Map<UserModel>(oldUser);
                }
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var oldUser = await _repository.GetById(id);
                if (oldUser == null)
                {
                    return NotFound("There is no user with the specified id");
                }

                _baseRepository.Delete(oldUser);

                if (await _baseRepository.SaveChangesAsync())
                {
                    return Ok();
                }
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
            return BadRequest("Failed to delete the camp!");
        }

        [HttpGet("get-key")]
        [AllowAnonymous]
        public IActionResult GetKey()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                return Ok(jwt);
            }
            catch (Exception e)
            {

                return Unauthorized("Problems with the key");
            }
        }

    }
}
