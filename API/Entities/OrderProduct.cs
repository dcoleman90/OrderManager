using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class OrderProduct
    {
        public string OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
    }
}