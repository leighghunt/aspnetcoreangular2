using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Models;
using WebApplication.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]

    public class IndividualController : Controller
    {
        private ApplicationDbContext _context;

        public IndividualController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET api/individual
        [HttpGet]
        public IEnumerable<Individual> Index()
        {
            return _context.Individuals.ToList();
        }

        // GET api/individual
        [HttpGet("{id}")]
        public Individual Get(int id)
        {
            return _context.Individuals.Where<Individual>(I => I.Id == id).Single();
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody]Individual individual)
        {
            _context.Individuals.Add(individual);
            _context.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Individual individual)
        {
            _context.Individuals.Update(individual);
            _context.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Individual individual = _context.Individuals.First(i => i.Id == id);
            _context.Individuals.Remove(individual);
            _context.SaveChanges();
        }
    }
}
