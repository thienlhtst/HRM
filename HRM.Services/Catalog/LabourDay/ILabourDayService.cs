using HRM.Entity.Enums;
using HRM.ViewModel.Catalogs.LabourDays;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.LabourDay
{
    public interface ILabourDayService
    {
        Task<List<GetListLabourDay>> GetList();

        Task<int> Create(LabourDayCreateRequest request);

        Task<int> Edit(LabourDayUpdateRequest request);

        Task<int> Delete(LabourDayDeleteRequest request);

        Task<LabourDayDetailRequest> GetbyID(string request);
    }
}