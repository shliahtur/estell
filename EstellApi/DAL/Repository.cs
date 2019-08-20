using EstellApi.Context;
using EstellApi.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace EstellApi.DAL
{
    public class Repository : IRepository
    {
        private readonly EFDbContext _context;
        IHostingEnvironment _appEnvironment;

        public Repository(EFDbContext context, IHostingEnvironment hostingEnvironment)
        {
            _context = context;
            _appEnvironment = hostingEnvironment;
        }

        public List<Product> GetProducts()
        {
            var res = _context.Products.Include(x => x.Images).ToList();
            return res;
        }


        public List<Product> GetProductsByCategory(string cat)
        {
            var catid = _context.Categories.Where(x => x.UrlSeo == cat).FirstOrDefault().Id;
            return _context.Products.Where(x => x.CategoryId == catid).ToList();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products
                .Include(x => x.Images)
                .Include(x => x.Category)
                .Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task AddNewProduct(ProductViewModel model)
        {

            Product product = new Product()
            {
                Name = model.Name,
                Age = model.Age,
                CategoryId = model.CategoryId,
                Price = model.Price,
                Vendor = model.Vendor,
                VendorCode = model.VendorCode,
                Description = model.Description,
                CreatedOn = DateTime.Now,

            };

            List<Image> images = new List<Image>();
            foreach (var img in model.Images)
            {
                images.Add(new Image
                {
                    Name = img.FileName,
                    Path = "/ClientApp/public/Products/" + img.FileName,
                    Product = product
                });
            }

              _context.Products.Add(product);
              _context.Images.AddRange(images);

            if (model.Images != null)
            {
                foreach (var img in model.Images)
                {
                    string path = "/ClientApp/public/Products/" + img.FileName;

                    using (var fileStream = new FileStream(_appEnvironment.ContentRootPath + path, FileMode.Create))
                    {
                       await img.CopyToAsync(fileStream);
                    }
                }
            }

            Save();
        }

        public Task<List<SearchProductModel>> GetLiveSearchProductList(string searchText)
        {
            var text = searchText.Trim().ToLower();
            return  _context.Products
                .Where(t => t.Name.ToLower().Contains(text))
                .Select(x => new SearchProductModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    ImgPath = x.Images.FirstOrDefault().Path
                })
                .ToListAsync();
   
        }

        public void EditProduct(Product product, IFormFile uploadedPic)
        {
            //if (uploadedPic != null)
            //{
            //    product.ImgName = uploadedPic.FileName;
            //    string path = "/ClientApp/public/Products/" + uploadedPic.FileName;
            //    product.ImgPath = path;

            //    using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
            //    {
            //        uploadedPic.CopyToAsync(fileStream);
            //    }
            //}
            //_context.Entry(product).State = Microsoft.EntityFrameworkCore.EntityState.Modified;

            Save();
        }

        public void DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);
            var images = _context.Images.Where(x => x.ProductId == id).ToList();
            foreach(var img in images)
            {
                _context.Images.Remove(img);
            }
            _context.Products.Remove(product);

            if (product.Images != null)
            {
                foreach(var img in product.Images)
                {
                    string path = _appEnvironment.ContentRootPath + "/ClientApp/public/Products/" + img.Name;
                    if (File.Exists(path))
                    {
                        File.Delete(path);
                    }
                }
            
            }

            Save();
        }
        public List<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }


        #region Save
        public void Save()
        {
            _context.SaveChanges();
        }
        #endregion
        #region dispose
        private bool _disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
    #endregion

}
