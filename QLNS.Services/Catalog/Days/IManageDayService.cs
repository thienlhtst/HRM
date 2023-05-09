
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.Services.Catalog.Days.Dtos.Manage;
using QLNS.Services.Catalog.Days.Dtos;
using QLNS.ViewModel.Dtos;

namespace QLNS.Services.Catalog.Days
{
    public interface IManageDayService
    {
        Task<int> Create(DayCreateRequest request);
        Task<int> Update(DayUpdateRequest request);
        Task<bool> UpdateName(int dayID, string newName);
        Task<int> Delete(int DayId);
        Task AddViewcount(int DayID);
        Task<DayViewModel> GetById(int DayId);
        Task<List<DayViewModel>> GetAll();
        Task<PagedResult<DayViewModel>> GetAllPaging(GetPagingDayRequest request);
    }
}
