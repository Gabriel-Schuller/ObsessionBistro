using System;
using System.Collections.Generic;

namespace ObsessionBistro.Data.Entities
{
    public class Order
    {
        public Guid Id { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }

        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
