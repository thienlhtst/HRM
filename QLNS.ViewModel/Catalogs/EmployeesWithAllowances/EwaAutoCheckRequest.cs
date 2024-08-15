using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class EwaAutoCheckRequest
    {
        public string AllowanceID { get; set; } = String.Empty;
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}