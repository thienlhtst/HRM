using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class LabourContract
    {
        [Key]
        public string ID { get; set; } = "";

        public string EmployeeID { get; set; } = "";
        public Employees? Employess { get; set; } = null!;
        public string Content { get; set; } = "";
        public DateTime ContractSigninDate { get; set; }
        public int ContractTerm { get; set; }
        public Active Active { get; set; }
    }
}