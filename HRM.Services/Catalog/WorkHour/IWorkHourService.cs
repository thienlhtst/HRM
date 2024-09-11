using HRM.ViewModel.Catalogs.WorkHour;
using HRM.ViewModel.Common;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.WorkHour
{
    public interface IWorkHourService
    {
        Task<List<WorkHourVM>> GetList();

        Task<int> Checkin(CheckinModel checkin);

        Task<int> Checkout(CheckoutModel checkout);

        Task<int> Create(WorkHourCreateRequest request);

        Task<WorkHourUpdateRequest> GetById(int id);

        Task<List<WorkHourofEmployeeViewModel>> GetByEmployeeId(Guid id);

        Task<PagedResult<WorkHourVM>> GetAllPage(GetWorkHourAllPage request);

        Task<bool> UpdateCheckin(WorkHourEditCheckinRequest request);

        Task<bool> UpdateCheckout(WorkHourEditCheckoutRequest request);

        Task<int> UpdateAll(WorkHourUpdateRequest request);

        Task<int> Delete(int ID);

        Task<PagedResultHome<WorkhourVMHome>> GetAllHome(GetWorkHourAllPage request);
    }
}