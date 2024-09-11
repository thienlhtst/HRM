using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.RelationShips
{
    public class EmployeesWithAllowances
    {
        [Key]
        public int ID { get; set; }

        public Guid EmployeeID { get; set; }
        public int AllowanceID { get; set; }
        public Employees Employess { get; set; } = null!;
        public Allowance Allowance { get; set; } = null!;
        public DateTime Date { get; set; }
    }
}