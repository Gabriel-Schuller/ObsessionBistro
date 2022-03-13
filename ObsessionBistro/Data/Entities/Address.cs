using System;
using System.Collections.Generic;

namespace ObsessionBistro.Data.Entities
{
    public class Address
    {
        public Guid Id { get; set; }
        public string Judet { get; set; }
        public string Strada { get; set; }
        public int Numar { get; set; }
        public string Bloc { get; set; }
        public string Scara { get; set; }
        public int Etaj { get; set; }
        public string Apartament { get; set; }
        //public User User { get; set; }  To add after we decide if we use identity or create our own users
    }
}
