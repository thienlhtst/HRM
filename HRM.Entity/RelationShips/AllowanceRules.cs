using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.RelationShips
{
    public class AllowanceRules
    {
        public int AllowanceID { get; set; }
        public Guid EmployeeID { get; set; }

        public DateTime Date { get; set; }

        public Allowance Allowance { get; set; } = null!;

        public Employees Employee { get; set; } = null!;
    }
}