using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Salary
{
	public class SalaryViewModel
	{
        public string ID { get; set; }
        public string LevelID { get; set; }
        public string PositionID { get; set; }
        public decimal Money { get; set; }
    }
}
