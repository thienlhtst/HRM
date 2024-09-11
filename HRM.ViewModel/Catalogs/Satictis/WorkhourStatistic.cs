using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Satictis
{
    public class WorkhourStatistic
    {
        public int ID { get; set; }
        public Guid EmployeeID { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public double Workhour { get; set; }
    }
}