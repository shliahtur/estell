using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EstellApi.DAL;
using EstellApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EstellApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private IRepository _repo;

        public ProductsController(IRepository repo)
        {
            _repo = repo;
        }


        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return _repo.GetProducts();
        }

        [HttpGet("[action]/{searchText}")]
        public async Task<IEnumerable<Product>> GetSearchProducts(string searchText)
        {
            return await _repo.GetSearchProductList(searchText);
        }

        [HttpGet("[action]/{id}")]
        public async Task<Product> GetProductById(int id)
        {
            return await _repo.GetProductById(id);
        }

        [HttpGet("[action]/{cat}")]
        public ActionResult<IEnumerable<Product>> GetProductsByCategory(string cat)
        {
            return _repo.GetProductsByCategory(cat);
        }

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Category>> GetCategories()
        {
            return _repo.GetCategories();
        }

        [HttpDelete("[action]/{id}")]
        public void DeleteProduct(int id)
        {
            _repo.DeleteProduct(id);
        }


        [HttpPost("[action]")]
        public async Task<IActionResult> EditProduct([FromForm]ProductViewModel model)
        {
            await _repo.EditProduct(model);

            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> AddNewProduct([FromForm]ProductViewModel model)
        {
            await _repo.AddNewProduct(model);

            return Ok();
        }
    }
}
