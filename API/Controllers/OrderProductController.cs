using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTO;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrderProductController : BaseApiController
    {
        private readonly DataContext _context;
        public OrderProductController(DataContext context)
        {
            this._context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<OrderProduct>>> GetOrderProducts()
        {
            return await _context.OrderProduct.ToListAsync();
        }

        //Rename me
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<OrderProduct>>> GetOrderProductByOrderId(int id)
        {
            return await _context.OrderProduct.Where(x => x.OrderId == id).ToListAsync();
        }


        [HttpPost]
        public object Post([FromBody]OrderProduct orderProduct)
        {
            _context.OrderProduct.Add(orderProduct);
            _context.SaveChanges();

            return orderProduct;
        }
    }
}