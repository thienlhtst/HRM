using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Satictis
{
    public class EmployeeWork
    {
        public int[] employeeWork { get; set; }
        public int[] employeeOff { get; set; }
        public DateTime[] Day { get; set; }

        public EmployeeWork()
        {
            employeeWork = new int[7];
            employeeOff = new int[7];
            Day = new DateTime[7];
            for (int i = 0; i < employeeWork.Length; i++) { employeeWork[i] = 0; }
            for (int i = 0; i < employeeOff.Length; i++) { employeeWork[i]=0; }
        }
    }
}