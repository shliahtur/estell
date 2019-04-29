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
    public class SampleDataController : Controller
    {
        private IRepository _repo;

        public SampleDataController(IRepository repo)
        {
            _repo = repo;
        }


        [HttpGet("[action]")]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return _repo.GetProducts();
        }

    }
}
