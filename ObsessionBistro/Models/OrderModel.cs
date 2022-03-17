namespace ObsessionBistro.Models
{
    public class OrderModel
    {
        public int ProductID { get; set; }
        public string Product { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
