using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.reservations
{
    public class List
    {
        public class Query : IRequest<List<ReservationDto>> { }

        public class Handler : IRequestHandler<Query, List<ReservationDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<List<ReservationDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                
                var reservations = await _context.Reservations
                .Include(x => x.user)
                .ToListAsync();

                var ReservationToReturn = _mapper.Map<List<ReservationDto>>(reservations);

                return ReservationToReturn;
            }
        }



    }
}