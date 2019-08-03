using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstellApi.Model
{
    public class NewProductViewModel
    {
        public string Name { get; set; }
        public int Price { get; set; }
        public int Rate { get; set; }
        public string Age { get; set; }
        public string Description { get; set; }
        public string VendorCode { get; set; }
        public string UrlSeo { get; set; }
        public string Vendor { get; set; }
        public int CategoryId { get; set; }
        public List<IFormFile> Images { get; set; }
    }
}
