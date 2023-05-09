using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.WorkHour
{
    public class WorkhourVMHome
    {
        public string Employee { get; set; }
        public string Name { get; set; }
        public int HourCheckin { get; set; }
        public int MinuteCheckin { get; set; }
        public int HourCheckout { get; set; }
        public int MinuteCheckout { get; set; }

    }
}
