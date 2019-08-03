using EstellApi.Model;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstellApi.DAL
{
    public interface IRepository : IDisposable
    {
        List<Product> GetProducts();
        List<Product> GetProductsByCategory(string cat);
        Product GetProductById(int id);
        void AddNewProduct(Product product, List<Image> images);
        void EditProduct(Product product, IFormFile uploadedPic);
        void DeleteProduct(int id);

        List<Category> GetCategories();
        void Save();
    }
}
