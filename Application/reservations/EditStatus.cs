using System;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;
namespace Application.reservations
{

    public class EditStatus
    {
          public class Command : IRequest
        {
            public statusDto Status { get; set; }
            
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
                var Reservation = await _context.Reservations.FindAsync(request.Status.Id);

                Reservation.status = request.Status.status;

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}