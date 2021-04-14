using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.reservations;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    
    public class ReservationsController : BaseApiController
    {

        
        [HttpGet]
        public async Task<ActionResult<List<ReservationDto>>> GetReservations()
        {
            return await Mediator.Send(new List.Query());
        }


        [HttpGet("{id}")] // Reservation/id
        public async Task<ActionResult<Reservation>> GetReservation(Guid id)
        {
           return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateReservation(Reservation reservation){
            return Ok(await Mediator.Send(new Create.Command{Reservation = reservation}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateReservation(Guid id, Reservation reservation){
            reservation.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Reservation = reservation}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(Guid id){
           
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        [HttpGet("UserReservations")]
        public async Task<ActionResult<List<ReservationDto>>> GetUserReservations() {
                return await Mediator.Send(new UserResevationsList.Query());
        }
    }
}