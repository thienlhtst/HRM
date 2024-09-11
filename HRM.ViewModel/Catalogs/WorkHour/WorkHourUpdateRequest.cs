using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.WorkHour
{
    public class WorkHourUpdateRequest
    {
        public int ID { get; set; }
        public Guid EmployeesID { get; set; }
        public string EmployeesName { get; set; }
        public int LBDID { get; set; }
        public string namelb { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int HourCheckin { get; set; }
        public int MinuteCheckin { get; set; }
        public int HourCheckout { get; set; }
        public int MinuteCheckout { get; set; }
    }
}