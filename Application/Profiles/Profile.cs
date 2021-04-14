using System;

namespace Application.Profiles
{
    public class Profile
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string Bio { get; set; }
        public int score { get; set; }
        public string TempRole { get; set; }
    }
}