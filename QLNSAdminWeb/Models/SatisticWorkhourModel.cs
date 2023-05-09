using QLNS.ViewModel.Catalogs.Employees;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;

namespace QLNSAdminWeb.Models
{
	public class SatisticWorkhourModel
	{
		public List<EmployeeVMStatistic> EmployeeModel { get; set; }
		public List<WorkhourStatistic> WorkhourStatistics { get; set; }
		public double total { get;set; }

	}
}
