using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.AllowanceRules
{
    public class AllowanceRulesViewModel
    {
        public string AllowanceName { get; set; } = String.Empty;
        public string EmployeeName { get; set; } = String.Empty;

        public DateTime Date { get; set; }
    }
}