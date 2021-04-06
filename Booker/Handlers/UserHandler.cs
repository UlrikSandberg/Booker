using System.Threading.Tasks;
using Booker.Persistence.Repositories;

namespace Booker.Handlers
{
    public interface IUserHandler
    {
        Task<bool> CreateUser();
    }
    
    public class UserHandler : IUserHandler
    {
        private readonly IUserRepository _userRepository;

        public UserHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> CreateUser()
        {
            // Do a lot of different logic here?
            
            // Insert into _userRepository
            
            // return a result in the end
            return true;
        }
    }
}