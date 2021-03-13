using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.reservations;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ReservationsController : BaseApiController
    {

        private readonly IMediator _mediator;

        public ReservationsController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Reservation>>> GetReservations()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] // Reservation/id
        public async Task<ActionResult<Reservation>> GetReservation(Guid id)
        {
            return Ok();
        }

    }
}