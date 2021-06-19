using System;
using Xunit;
using Moq;
using MediatR;
using Persistence;
using Application.reservations;
using Domain;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using static Application.reservations.Details;
using API.Controllers;

namespace ReservationTest
{
    public class ReservationProjectTest
    {
        private readonly ReservationsController _reservationCtr;
  

        [Fact]
        public async Task GetReservations_ShouldReturnReservation_WhenItExists()
        {

            // Arrange
            var reservationId = Guid.NewGuid();
            var mediatorMock = new Mock<IMediator>();
            

            var query = new Details.Query { Id = reservationId };
            // var DetailesHandler = new Details.Handler(_context);
            var reservationDto = new Reservation { Id = reservationId, Title = "Med cool", Date = DateTime.Today, Description = "well done" };
            // Act
            mediatorMock.Setup(x => x.Send(query, new System.Threading.CancellationToken())).ReturnsAsync(reservationDto);

            // var reservation = await DetailesHandler.Handle(query, new System.Threading.CancellationToken());
            var reservation = await mediatorMock.Object.Send(query);
            // Assert
            Assert.Equal(reservationId, reservation.Id);
            Assert.Equal(reservationDto.Title, reservation.Title);
        }
    }
}
