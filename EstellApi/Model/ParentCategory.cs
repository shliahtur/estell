using System.Collections.Generic;


namespace EstellApi.Model
{
    public class ParentCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UrlSeo { get; set; }
        public List<Category> Categories { get; set; }

    }
}
