using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Systems
{
    public class LoginRequest
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }

        public string accessToken { get; set; }
        public int RankRole { get; set; }
    }
}