using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Allowance
{
    public class AllowanceEditProcedure
    {
        public int ID { get; set; }
        public string Name { get; set; } = "";
        public int Money { get; set; }
        public string EmployeeID { get; set; } = "";
        public DateTime Date { get; set; }
    }
}