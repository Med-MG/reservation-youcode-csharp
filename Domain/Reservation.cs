using System;

namespace Domain
{
    public class Reservation
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string ReservationType { get; set; }
        public int status { get; set; }
        public AppUser user { get; set; }
    }
}