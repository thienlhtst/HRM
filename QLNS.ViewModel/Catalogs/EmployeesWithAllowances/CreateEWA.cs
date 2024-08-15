using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class CreateEWA
    {
        public string EmployeeID { get; set; } = String.Empty;
        public string AllowanceID { get; set; } = String.Empty;
        public DateTime Date { get; set; }
    }
}