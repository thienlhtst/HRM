using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Satistics
{
    public interface IStatisticSalaryService
    {
        Task<PagedResult<SalaryListStatistic>> GetAllPage(GetStatisticAllPage request);

        Task<List<TopSalary>> TopSalary(int top);

        Task<SalaryToEmployeeInYear> SalaryInYear(int year);
    }
}