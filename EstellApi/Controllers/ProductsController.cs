using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EstellApi.DAL;
using EstellApi.Model;
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

        [HttpGet("[action]/{cat}")]
        public ActionResult<IEnumerable<Product>> GetProductsByCategory(string cat)
        {
            return _repo.GetProductsByCategory(cat);
        }

    } 
}
