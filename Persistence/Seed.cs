using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Reservations.Any()) return;
            
            var Reservations = new List<Reservation>
            {
                new Reservation
                {
                    Title = "Past Reservation 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Reservation 2 months ago",
                    ReservationType = "week end"
                },
                new Reservation
                {
                    Title = "Past Reservation 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Reservation 1 month ago",
                    ReservationType = "Full day"
                },
                new Reservation
                {
                    Title = "Future Reservation 1",
                    Date = DateTime.Now.AddMonths(1),
                    Description = "Reservation 1 month in future",
                    ReservationType = "week end"
                },
                new Reservation
                {
                    Title = "Future Reservation 2",
                    Date = DateTime.Now.AddMonths(2),
                    Description = "Reservation 2 months in future",
                    ReservationType = "week end"
                },
                new Reservation
                {
                    Title = "Future Reservation 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description = "Reservation 3 months in future",
                    ReservationType = "week end"
                },
                new Reservation
                {
                    Title = "Future Reservation 4",
                    Date = DateTime.Now.AddMonths(4),
                    Description = "Reservation 4 months in future",
                    ReservationType = "week end"
                },
                new Reservation
                {
                    Title = "Future Reservation 5",
                    Date = DateTime.Now.AddMonths(5),
                    Description = "Reservation 5 months in future",
                    ReservationType = "night"
                },
                new Reservation
                {
                    Title = "Future Reservation 6",
                    Date = DateTime.Now.AddMonths(6),
                    Description = "Reservation 6 months in future",
                    ReservationType = "Full day"
                },
                new Reservation
                {
                    Title = "Future Reservation 7",
                    Date = DateTime.Now.AddMonths(7),
                    Description = "Reservation 2 months ago",
                    ReservationType = "night"
                },
                new Reservation
                {
                    Title = "Future Reservation 8",
                    Date = DateTime.Now.AddMonths(8),
                    Description = "Reservation 8 months in future",
                    ReservationType = "Full day"
                }
            };

            await context.Reservations.AddRangeAsync(Reservations);
            await context.SaveChangesAsync();
        }
    }
}