using HRM.ViewModel.Catalogs.EmployeesWithAllowances;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.EmployeesWithAllowances
{
    public interface IEmployeesWithAllowancesService
    {
        Task<int> Create(CreateEWA request);
        Task<int> Update(EmployeesWithAllowancesEditRequest request);
        Task<int> Delete(string id);
        Task<EmployeesWithAllowancesViewModel> GetByID(string id);
        Task<PagedResult<EmployeesWithAllowancesViewModel>> GetAllPage(GetEmployeesWithAllowancesPagingRequest request);
        Task<List<EmployeesWithAllowancesViewModel>> GetList();

        Task<int> auto(EwaAutoCheckRequest request);

        Task<PagedResult<EwaAutoNow>> EWANow(GetEwaRequest request);
        Task<List<HRM.Entity.RelationShips.EmployeesWithAllowances>> check(EwaAutoCheckRequest request);
    }
}
