﻿using EstellApi.Context;
using EstellApi.Model;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

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
            return _context.Products.ToList();
        }


        public List<Product> GetProductsByCategory(string cat)
        {
            var catid = _context.Categories.Where(x => x.UrlSeo == cat).FirstOrDefault().Id;
            return _context.Products.Where(x => x.CategoryId == catid).ToList();
        }

        public Product GetProductById(int id)
        {
            return _context.Products.Find(id);
        }

        public void AddNewProduct(Product product, List<Image> images)
        {
            _context.Products.Add(product);

            //if (uploadedPics != null)
            //{
            //    foreach(var pic in up)
            //    string path = "/ClientApp/public/Products/" + uploadedPic.FileName;

            //    using (var fileStream = new FileStream(_appEnvironment.WebRootPath + path, FileMode.Create))
            //    {
            //        uploadedPic.CopyToAsync(fileStream);
            //    }
            //}

            Save();
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
            //var product = _context.Products.Find(id);
            //_context.Products.Remove(product);

            //if (product.ImgName != null)
            //{
            //    string path = _appEnvironment.WebRootPath + "/Images/" + product.ImgName;
            //    if (File.Exists(path))
            //    {
            //        File.Delete(path);
            //    }
            //}

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
