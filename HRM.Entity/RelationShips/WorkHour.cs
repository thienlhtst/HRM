using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.RelationShips
{
    public class WorkHour
    {
        [Key]
        [Required]
        public int ID { get; set; }

        public Guid EmployeesID { get; set; }
        public int LBDID { get; set; }
        public Employees Employess { get; set; } = null!;
        public LabourHour Labour { get; set; } = null!;
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int HourCheckin { get; set; }
        public int MinuteCheckin { get; set; }
        public int HourCheckout { get; set; }
        public int MinuteCheckout { get; set; }
    }
}