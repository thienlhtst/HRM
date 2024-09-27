using Microsoft.AspNetCore.Http;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Employees
{
    public class EmployeeCreateRequest
    {
        public string ID { get; set; } = String.Empty;

        [Required(ErrorMessage = "First Name is required"), StringLength(50, MinimumLength = 2)]
        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "First Name")]
        public string FirstName { get; set; } = String.Empty;

        [Required(ErrorMessage = "First Name is required"), StringLength(50, MinimumLength = 2)]
        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "Middle Name")]
        public string MiddleName { get; set; } = String.Empty;

        [Required(ErrorMessage = "Last Name is required"), StringLength(50, MinimumLength = 2)]
        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "Last Name")]
        public string LastName { get; set; } = String.Empty;

        [DataType(DataType.Date), Display(Name = "Date Of Birth")]
        public DateTime DOB { get; set; }

        public Sex Sex { get; set; }

        [RegularExpression("^[0-9]+$"), Display(Name = "Citizen Identity Card")]
        public string CIC { get; set; } = String.Empty;

        [RegularExpression("^[0-9]+$")]
        public string NumberPhone { get; set; } = String.Empty;

        public string Email { get; set; } = "";

        public string Address { get; set; } = String.Empty;
        public int SalaryID { get; set; }
        public string Account { get; set; } = String.Empty;
        public string Password { get; set; } = String.Empty;
        public Active Active { get; set; }

        public string URLImage { get; set; } = String.Empty;
        //public IFormFile ThumbnailImage { get; set; }
    }
}