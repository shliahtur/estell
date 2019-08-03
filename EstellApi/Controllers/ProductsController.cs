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

        [HttpGet("[action]/{cat}")]
        public ActionResult<IEnumerable<Product>> GetProductsByCategory(string cat)
        {
            return _repo.GetProductsByCategory(cat);
        }

        [HttpPost("[action]")]
        public ActionResult AddNewProduct([FromBody] NewProductViewModel model)
        {
            List<Image> images = new List<Image>();

            if (model.Images != null)
            {
                foreach(var image in model.Images)
                {
                    images.Add( new Image {

                        Name = image.FileName,      
                        Path = "/ClientApp/public/Products/" + image.FileName

                    });
                }
            }

            Product product = new Product()
            {
                Name = model.Name,
                Age = model.Age,
                Price = model.Price,
                CategoryId = model.CategoryId,
                Description = model.Description,
                Vendor = model.Vendor,
                VendorCode = model.VendorCode
            };

            _repo.AddNewProduct(product, images);

            return Ok();
        }
    }
}
