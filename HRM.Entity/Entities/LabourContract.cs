using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class LabourContract
    {
        public int ID { get; set; }

        public Guid EmployeeID { get; set; }
        public Employees? Employess { get; set; } = null!;
        public string Content { get; set; } = "";
        public DateTime ContractSigninDate { get; set; }
        public int ContractTerm { get; set; }
        public Active Active { get; set; }
    }
}