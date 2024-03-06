using QLNS.ViewModel.Catalogs.AllowanceRules;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;

namespace API
{
    public interface IEmployeeAPIClient
    {
        Task<bool> Create(EmployeeCreateRequest request);

        Task<EmployeeViewModel> GetById(string id);

        Task<EmployeeEditRequest> GetByIdEdit(string id);

        Task<PagedResult<EmployeeViewModel>> GetEmployeePaging(GetEmployeePagingRequest request);

        Task<List<EmployeeViewModel>> GetByRankAndPosition(string SalaryID);

        Task<List<EmployeeRulesViewModel>> GetByAllowance(string AllowanceID);

        Task<bool> Update(EmployeeEditRequest request);

        Task<bool> Delete(string EmployeeID);

        Task<List<EmployeeVMStatistic>> GetAll();
    }
}