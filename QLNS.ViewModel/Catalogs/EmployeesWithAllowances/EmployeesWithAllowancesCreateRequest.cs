using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class EmployeesWithAllowancesCreateRequest
    {
        public string EmployeeID { get; set; }
        public string AllowanceID { get; set; }
        public DateTime Date { get; set; }
	}
}
