using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Booker.Handlers;
using Booker.Persistence.Models;
using Booker.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace Booker.Controllers
{
    [Route("users")]
    public class UserController : ControllerBase
    {
        private readonly IUserHandler _userHandler;
        private readonly IMapper _mapper;

        public UserController(IUserHandler userHandler, 
            IMapper mapper)
        {
            _userHandler = userHandler;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("")]
        public async Task<IEnumerable<User>> GetUsers(int page = 0, int pageSize = 100)
        {
            return await _userHandler.GetAll(page, pageSize);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<User> GetUser(Guid id)
        {
            return await _userHandler.Get(id);
        }

        [HttpPut]
        [Route("")]
        public async Task<User> Put([FromBody]User user)
        {
            return await _userHandler.Update(user);
        }

        [HttpPost]
        [Route("")]
        public async Task<Guid> CreateUser([FromBody]CreateUserRequestModel rm)
        {
            var guid = new Guid();
            var user = _mapper.Map<User>(rm);
            return await _userHandler.CreateUser(user); 
        }

        [HttpDelete]
        [Route("")]
        public async Task<bool> Delete(Guid id)
        {
            return await _userHandler.DeleteUser(id);
        }
    }
}