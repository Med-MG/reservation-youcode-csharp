using AutoMapper;
using Domain;

namespace API.Extensions
{
    public class mappingRegister : Profile 
    {
        public mappingRegister()
        {
            CreateMap<DTOs.RegisterDto, AppUser>();
        }
    }
}