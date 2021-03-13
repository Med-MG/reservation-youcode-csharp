using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.reservations
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Reservation Reservation { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var Reservation = await _context.Reservations.FindAsync(request.Reservation.Id);

                // Reservation.Title = request.Reservation.Title ?? Reservation.Title;

                _mapper.Map(request.Reservation, Reservation);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}