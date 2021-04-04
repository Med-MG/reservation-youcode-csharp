using Application.reservations;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Reservation, Reservation>();
            CreateMap<Reservation, ReservationDto>();
            CreateMap<AppUser, Profiles.Profile>();
        }
    }
}