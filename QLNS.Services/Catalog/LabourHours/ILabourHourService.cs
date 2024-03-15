using QLNS.ViewModel.Catalogs.LabourHours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.LabourHours
{
    public interface ILabourHourService
    {
        Task<List<GetListLabourHour>> GetList();

        Task<int> Create(LabourHourCreateRequest request);

        Task<int> Edit(LabourHourUpdateRequest request);

        Task<int> Delete(LabourHourDeleteRequest request);

        Task<LabourHourDetailRequest> GetbyID(string request);
    }
}