using System;

namespace Booker.Persistence.Models
{
    public class User : IEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}