using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Booker.Persistence.Models;
using Booker.Persistence.Repositories;
using Booker.RequestModels;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace Booker.Handlers
{
    public interface IUserHandler
    {
        Task<Guid> CreateUser(User model);
        Task<bool> DeleteUser(Guid id);
        Task<IEnumerable<User>> GetAll(int page, int pageSize);
        Task<User> Update(User model);
        Task<User> Get(Guid id);
    }
    
    public class UserHandler : IUserHandler
    {
        private readonly IUserRepository _userRepository;

        public UserHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<bool> DeleteUser(Guid id)
        {
            return _userRepository.Delete(id);
        }

        public Task<IEnumerable<User>> GetAll(int page, int pageSize)
        {
            return _userRepository.GetPaged(page, pageSize); 
        }

        public Task<User> Update(User model)
        {
            return _userRepository.Put(model);
        }

        public Task<Guid> CreateUser(User model)
        {
            return _userRepository.Insert(model);
        }

        public Task<User> Get(Guid id)
        {
            return _userRepository.GetById(id);
        }
    }
}