using System.Collections.Generic;

namespace EstellApi.Model
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSeo { get; set; }
        public List<Product> Products { get; set; }
    }
}
