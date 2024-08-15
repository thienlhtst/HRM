using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.WorkHour
{
    public class RealtimeWH
    {
        public string EmployeesID { get; set; }
        public int flag { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int Hour { get; set; }
        public int Minute { get; set; }
    }
}