using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.WorkHour
{
    public interface IWorkHourService
    {
        Task<List<WorkHourVM>> GetList();

        Task<int> Checkin(CheckinModel checkin);

        Task<int> Checkout(CheckoutModel checkout);

        Task<QLNS.Entity.RelationShips.WorkHour> Create(QLNS.Entity.RelationShips.WorkHour request);

        Task<WorkHourUpdateRequest> GetById(int id);

        Task<PagedResult<WorkHourVM>> GetAllPage(GetWorkHourAllPage request);

        Task<bool> UpdateCheckin(WorkHourEditCheckinRequest request);

        Task<bool> UpdateCheckout(WorkHourEditCheckoutRequest request);

        Task<int> UpdateAll(WorkHourUpdateRequest request);

        Task<int> Delete(int ID);

        Task<PagedResultHome<WorkhourVMHome>> GetAllHome(GetWorkHourAllPage request);
    }
}