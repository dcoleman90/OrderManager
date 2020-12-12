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

        [HttpPut]
        public void UpdateUser([FromBody] OrderProduct orderProduct)
        {
            OrderProduct orignalOrderProduct = _context.OrderProduct.Where(x => x.OrderId == orderProduct.OrderId && x.ProductId == orderProduct.ProductId).First();
            orignalOrderProduct.Quantity = orderProduct.Quantity;

            _context.OrderProduct.Update(orignalOrderProduct);
            _context.SaveChanges();
        }


        [HttpDelete()]
        public async Task<ActionResult> DeleteOrderProduct([FromBody] OrderProduct orderProduct) 
        {
            OrderProduct orignalOrderProduct = _context.OrderProduct.Where(x => x.OrderId == orderProduct.OrderId && x.ProductId == orderProduct.ProductId).First();
            _context.OrderProduct.Remove(orignalOrderProduct);
            _context.SaveChanges();

            return Ok();
        }
    }
}