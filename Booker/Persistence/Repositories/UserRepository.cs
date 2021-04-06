using System;
using Booker.Configuration;
using Booker.Persistence.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace Booker.Persistence.Repositories
{
    public interface IUserRepository : IBaseRepository<User>
    {
    }
    
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IMongoClient client, IOptions<PersistenceConfiguration> config) : base(client, config)
        {
            Console.WriteLine("It is actually working :D ");
        }
    }
}