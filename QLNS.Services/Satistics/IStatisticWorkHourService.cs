using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Satistics
{
    public interface IStatisticWorkHourService
    {
        Task<PagedResult<WorkhourStatistic>> GetallPage(GetStatisticAllPage request);
        Task<List<WorkhourStatistic>> GetAll(int month,int year);
    }
}
