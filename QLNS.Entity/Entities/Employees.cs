using QLNS.Entity.Enums;
using QLNS.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class Employees
    {
        public string ID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime DOB { get; set; }
        public Sex Sex { get; set; }
        public string CIC { get; set; }
        public string NumberPhone { get; set; }
        public string Address { get; set; }
        public string SalaryID { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }
        public Active Active { get; set; }
        public string URLImage { get; set; }

        public Salary? Salary { get; set; }
        public List<WorkHour> workHours { get; } = new();
        public List<EmployeesWithAllowances> EWA { get; } = new();
        public List<AllowanceRules> Rules { get; } = new();
        public ICollection<LabourContract> LabourContracts { get; } = new List<LabourContract>();
        public ICollection<Rewards> Rewards { get; } = new List<Rewards>();
    }
}