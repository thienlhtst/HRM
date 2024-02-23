using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Employees
{
    public class EmployeeEditRequest
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
    }
}