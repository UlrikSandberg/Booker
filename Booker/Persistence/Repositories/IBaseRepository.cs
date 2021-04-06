using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Booker.Persistence.Models;

namespace Booker.Persistence.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : IEntity
    {
        Task<bool> Delete(Guid id);
        Task<IEnumerable<TEntity>> GetPaged(int page, int pageSize);
        Task<TEntity> GetById(Guid id);
        Task<Guid> Insert(TEntity entity);
    }
}