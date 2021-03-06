using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ObsessionBistro.Data.Entities
{
    public class Address
    {
        public Guid Id { get; set; }
        [Required]
        public string Judet { get; set; }
        [Required]
        public string Strada { get; set; }
        [Required]
        public string Numar { get; set; }
        [Required]
        public string Bloc { get; set; }
        public string Scara { get; set; }
        public string Etaj { get; set; }
        public string Apartament { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
        //public User User { get; set; }  To add after we decide if we use identity or create our own users
    }
}
