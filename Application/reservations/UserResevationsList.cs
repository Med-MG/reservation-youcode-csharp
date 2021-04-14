using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;
namespace Application.reservations
{
    public class UserResevationsList
    {
        public class Query : IRequest<List<ReservationDto>> { }

        public class Handler : IRequestHandler<Query, List<ReservationDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
               
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<ReservationDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                // var userName =  _userAccessor.GetUsername();
                //  var userId = _userAccessor.GetUserId();
                // var reservations = await _context.Reservations
                // .FromSqlRaw("SELECT  res.Id, Date, Description, ReservationType, Title, status, userId FROM Reservations res join AspNetUsers u on res.userId = u.Id WHERE u.UserName == {0}", userName)
                // .ToListAsync();
                var user = await _context.Users.FirstOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
               

                var reservations = await _context.Reservations.Where(x => x.user == user)
                .ToListAsync();

                var ReservationToReturn = _mapper.Map<List<ReservationDto>>(reservations);

                return ReservationToReturn;
            }
        }

    }
}