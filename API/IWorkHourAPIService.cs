using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
	public interface IWorkHourAPIService
	{
		Task<PagedResult<WorkHourVM>> GetWorkHourPagings(GetWorkHourAllPage request);
		Task<PagedResultHome<WorkhourVMHome>> GetAllHome(GetWorkHourAllPage request);
		Task<WorkHourUpdateRequest> GetById(int id);
		Task<bool> UpdateAll(WorkHourUpdateRequest request);
		Task<bool> DeleteById(int id);
		Task<bool> Checkin(CheckinModel model);
        Task<bool> Checkout(CheckoutModel model);
    }
}
