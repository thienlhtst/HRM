using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.AllowanceRules
{
    public class AllowanceRulesCreateViewModel
    {
        public string AllowanceID { get; set; } = String.Empty;
        public string EmployeeID { get; set; } = String.Empty;

        public DateTime Date { get; set; }
    }
}