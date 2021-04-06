using System;

namespace Booker.Persistence.Models
{
    public interface IEntity
    {
        Guid Id { get; }
    }
}