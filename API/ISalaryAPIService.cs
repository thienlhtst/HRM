using QLNS.ViewModel.Catalogs.Salary;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;

namespace API
{
    public interface ISalaryAPIService
    {
        Task<bool> Create(SalaryCreateRequest request);
        Task<SalaryVM> GetById(string id);
        Task<SalaryEditRequest> GetByIdForEdit(string id);
        Task<PagedResult<SalaryVM>> GetSalaryPaging (GetSalaryPagingRequest request);
        Task<bool> Update(SalaryEditRequest request);
        Task<bool> Delete(string SalaryID);
    }
}