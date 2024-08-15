using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Employees
{
    public class EmployeeViewModelHasSalaryID
    {
        public string ID { get; set; } = String.Empty;
        public string FirstName { get; set; } = String.Empty;
        public string MiddleName { get; set; } = String.Empty;
        public string LastName { get; set; } = String.Empty;
        public DateTime DOB { get; set; }
        public Sex Sex { get; set; }
        public string CIC { get; set; } = String.Empty;
        public string NumberPhone { get; set; } = String.Empty;
        public string Address { get; set; } = String.Empty;
        public string SalaryID { get; set; } = String.Empty;

        public string Account { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public Active Active { get; set; }
        public string URLImage { get; set; } = String.Empty;
    }
}