using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.WorkHour
{
	public class CheckinModel
	{
		public string EmployeesID { get; set; }
		public string LBDID { get; set; }
		public int Day { get; set; }
		public int Month { get; set; }
		public int Year { get; set; }
		public int HourCheckin { get; set; }
		public int MinuteCheckin { get; set; }
		
	}
}
