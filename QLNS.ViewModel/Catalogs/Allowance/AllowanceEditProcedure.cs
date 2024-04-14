using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Allowance
{
    public class AllowanceEditProcedure
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public int Money { get; set; }
        public string EmployeeID {  get; set; }
        public DateTime Date { get; set; }
    }
}
