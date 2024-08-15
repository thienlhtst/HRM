using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.WorkHour
{
    public class WorkHourofEmployeeViewModel
    {
        public int ID { get; set; }
        public string EmployeeID { get; set; }
        public string LBD { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int HourCheckin { get; set; }
        public int MinuteCheckin { get; set; }
        public int HourCheckout { get; set; }
        public int MinuteCheckout { get; set; }
    }
}