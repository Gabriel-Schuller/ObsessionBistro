﻿using System;

namespace ObsessionBistro.Data.Entities
{
    public class OrderDetails
    {
        public Guid Id { get; set; }

        public int Quantity { get; set; }
        public Guid OrderId { get; set; }
        public Guid ProductId { get; set; }

        public Product Product { get; set; }
        public Order Order { get; set; }

    }
}
