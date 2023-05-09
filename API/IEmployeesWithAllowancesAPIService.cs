using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Catalogs.EmployeesWithAllowances;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface IEmployeesWithAllowancesAPIService
    {
        Task<PagedResult<EmployeesWithAllowancesViewModel>> GetEWAPaging(GetEmployeesWithAllowancesPaging request);

        Task<PagedResult<EwaAutoNow>> GetEWANowPaging(GetEwaRequest request);
        Task<bool> auto(EwaAutoCheckRequest request);
    }
}
