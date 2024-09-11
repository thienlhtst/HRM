using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class EmployeesWithAllowancesEditRequest
    {
        public int ID { get; set; }
        public Guid EmployeeID { get; set; }
        public int AllowanceID { get; set; }
        public DateTime Date { get; set; }
    }
}