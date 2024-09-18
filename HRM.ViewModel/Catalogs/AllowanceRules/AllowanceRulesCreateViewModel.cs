using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.AllowanceRules
{
    public class AllowanceRulesCreateViewModel
    {
        public int AllowanceID { get; set; }
        public Guid EmployeeID { get; set; }

        public DateTime Date { get; set; }

    }
}