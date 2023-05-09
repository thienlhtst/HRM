using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface IStatisticAPIService
    {
        Task<PagedResult<WorkhourStatistic>> GetAllPage(GetStatisticAllPage request);
        Task<List<WorkhourStatistic>> GetPage(int month,int year);

    }
}
