using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.RelationShips
{
    public class AllowanceRules
    {
        public string AllowanceID { get; set; }
        public string EmployeeID { get; set; }

        public DateTime Date { get; set; }

        public Allowance Allowance { get; set; } = null!;

        public Employees Employee { get; set; } = null!;
    }
}