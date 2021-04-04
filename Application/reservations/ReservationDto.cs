using System;
using Application.Profiles;

namespace Application.reservations
{
    public class ReservationDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string ReservationType { get; set; }
        public int status { get; set; }
        public Profile user { get; set; } 
    }
}