using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public enum Roles
        {
            Admin,
            BasicUser
        }
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any()){
                var users = new List<AppUser> {
                    new AppUser{DisplayName = "Med", UserName = "Med", Email = "med@gmail.com", score = 5, TempRole = "admin"},
                    new AppUser{DisplayName = "Nas", UserName = "ns", Email = "ns@gmail.com", score = 7, TempRole = "user"},
                    new AppUser{DisplayName = "Mlk", UserName = "Mlk", Email = "Mlik@gmail.com", score = 1, TempRole = "user"},
                    new AppUser{DisplayName = "said", UserName = "lm", Email = "said@gmail.com", score = 3, TempRole = "user"},
                    new AppUser{DisplayName = "Hassan", UserName = "hassan", Email = "Hs@gmail.com", score = 10, TempRole = "user"},
                    new AppUser{DisplayName = "Amal", UserName = "Amall", Email = "Lmm@gmail.com", score = 2, TempRole = "user"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            // if(!roleManager.Roles.Any()){

            //     var Roles = new List<Roles>{
            //         new Roles{roleName = "Admin"},
            //         new Roles{roleName = "User"}
            //     };
            //     foreach (var role in Roles)
            //     {
            //         await roleManager.CreateAsync(role);
            //     }
                
            // }
            // await roleManager.CreateAsync(new IdentityRole(Roles.Admin.ToString()));
            

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