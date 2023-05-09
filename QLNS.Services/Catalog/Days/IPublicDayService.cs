
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.Services.Catalog.Days.Dtos;
using QLNS.Services.Catalog.Days.Dtos.Manage;
using QLNS.ViewModel.Dtos;

namespace QLNS.Services.Catalog.Days
{
    public interface IPublicDayService
    {
        Task<PagedResult<DayViewModel>> GetAllByCategoryID(GetPagingDayRequest request);
        Task<List<DayViewModel>> GetAll();
    }
}
