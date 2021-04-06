using System;
using System.Threading.Tasks;
using Booker.Handlers;
using Booker.RequestModels;
using Microsoft.AspNetCore.Mvc;

namespace Booker.Controllers
{
    [Route("users")]
    public class UserController : ControllerBase
    {
        private readonly IUserHandler _userHandler;

        public UserController(IUserHandler userHandler)
        {
            _userHandler = userHandler;
        }

        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetUsers(int page, int pageSize)
        {
            return new ObjectResult(new []{"Casper", "Ulrik", "Morten", "Oskar"});
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetUser(Guid id)
        {
            return new ObjectResult(new {name = "Casper"});
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> CreateUser([FromBody]CreateUserRequestModel rm)
        {
            var guid = new Guid();
            return new ObjectResult(new {id = guid.ToString(), name = rm.Name});
        }
    }
}