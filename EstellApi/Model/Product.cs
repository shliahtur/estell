using System;

namespace EstellApi.Model
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public int Rate { get; set; }
        public string Age { get; set; }
        public string Description { get; set; }
        public string VendorCode { get; set; }
        public string ImgName { get; set; }
        public string ImgPath { get; set; }
        public string UrlSeo { get; set; }
        public string Vendor { get; set; }
        public DateTime CreatedOn { get; set; }


        public int CategoryId { get; set; }
        public Category Category { get; set; }

    }
}
