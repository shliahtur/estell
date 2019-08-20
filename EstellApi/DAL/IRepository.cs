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
        Task<Product> GetProductById(int id);

        Task<List<SearchProductModel>> GetLiveSearchProductList(string searchText);
        Task AddNewProduct(ProductViewModel model);
        void EditProduct(Product product, IFormFile uploadedPic);
        void DeleteProduct(int id);

        List<Category> GetCategories();
        void Save();
    }
}
