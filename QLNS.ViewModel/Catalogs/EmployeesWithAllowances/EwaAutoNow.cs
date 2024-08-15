using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class EwaAutoNow
    {
        public string EmployeeName { get; set; } = String.Empty;
        public string AllowanceName { get; set; } = String.Empty;
        public DateTime date { get; set; }
        public int Money { get; set; }
    }
}