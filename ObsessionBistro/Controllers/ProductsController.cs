using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using ObsessionBistro.Data.Entities;
using ObsessionBistro.Models;
using ObsessionBistro.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ObsessionBistro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _repository;
        private readonly LinkGenerator _linkGenerator;
        private readonly IMapper _mapper;
        private readonly IBaseRepository _baseRepository;

        public ProductsController(IProductRepository repository,
            LinkGenerator linkGenerator, IMapper mapper, IBaseRepository baseRepository)
        {
            _repository = repository;
            _linkGenerator = linkGenerator;
            _mapper = mapper;
            _baseRepository = baseRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductModel>>> GetAllProducts()
        {
            try
            {
                var products = await _repository.GetAllAsync();

                return _mapper.Map<List<ProductModel>>(products);
            }
            catch (System.Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
        }

        [HttpGet("{productId:Guid}")]
        public async Task<ActionResult<ProductModel>> Get(Guid productId)
        {
            try
            {
                var result = await _repository.GetById(productId);
                if (result == null)
                {
                    return this.NotFound();
                }
                return _mapper.Map<ProductModel>(result);
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");

            }
        }

        [HttpGet("/search/{word}")]
        public async Task<ActionResult<List<ProductModel>>> SearchByWord(string word)
        {
            try
            {
                var results = await _repository.GetByPartialWord(word);

                if (!results.Any()) return this.NotFound();

                return _mapper.Map<List<ProductModel>>(results);

            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
        }

        [HttpPost]
        public async Task<ActionResult<ProductModel>> Post([FromBody] ProductModel model)
        {
            var existing = await _repository.GetByName(model.Name);

            if (existing != null) return BadRequest("Product already exists");

            try
            {
                var product = _mapper.Map<Product>(model);
                _baseRepository.Add(product);

                if (await _baseRepository.SaveChangesAsync())
                {
                    var location = _linkGenerator.GetPathByAction("Get", "Products", new { productId = product.Id });

                    if (string.IsNullOrWhiteSpace(location))
                    {
                        return BadRequest("Could not use current id");
                    }
                    return Created(location, _mapper.Map<ProductModel>(product));
                }
            }
            catch (Exception)
            {

                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }
            return BadRequest();
        }

        [HttpPut("{productName}")]
        public async Task<ActionResult<ProductModel>> Put(string productName,ProductModel model)
        {
            try
            {
                var oldProduct = await _repository.GetByName(productName);
                if (oldProduct == null)
                {
                    return NotFound("Product with the specified name does not exist");
                }
                _mapper.Map(model, oldProduct);

                if (await _baseRepository.SaveChangesAsync())
                {
                    return _mapper.Map<ProductModel>(oldProduct);
                }
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Server error");
            }

            return BadRequest();
        }

        [HttpDelete("{productName}")]
        public async Task<IActionResult> Delete(string productName)
        {
            try
            {
                var oldAnswer = await _repository.GetByName(productName);
                if (oldAnswer == null)
                {
                    return NotFound("There is no product with the specified name");
                }

                _baseRepository.Delete(oldAnswer);

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

    }
}
