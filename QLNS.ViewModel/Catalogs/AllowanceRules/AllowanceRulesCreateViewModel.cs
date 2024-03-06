using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.AllowanceRules
{
    public class AllowanceRulesCreateViewModel
    {
        public string AllowanceID { get; set; }
        public string EmployeeID { get; set; }

        public DateTime Date { get; set; }
    }
}