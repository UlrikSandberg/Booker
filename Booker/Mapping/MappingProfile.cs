using AutoMapper;
using Booker.Persistence.Models;
using Booker.RequestModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booker.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateUserRequestModel, User>().ReverseMap();
        }
    }
}
