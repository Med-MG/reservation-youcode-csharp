using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.reservations
{
    public class Edit
    {
        public class Command : IRequest{
            public Reservation Reservation { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var Reservation = await _context.Reservations.FindAsync(request.Reservation.Id);

                Reservation.Title = request.Reservation.Title ?? Reservation.Title;

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}