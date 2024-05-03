using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Catalogs.Salary;
using System;
using System.Collections.Generic;
using System.Linq;
using QLNS.ViewModel.Dtos;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Salary
{
    public interface ISalaryService
    {
        Task<PagedResult<SalaryViewModel>> GetAllPage(GetSalaryPagingRequest Request);

        Task<int> Create(SalaryCreateRequest request);

        Task<int> Update(SalaryEditRequest request);

        Task<int> Delete(string SalaryID);

        Task<SalaryViewModel> GetById(string SalaryID);

        Task<List<SalaryViewModel>> GetList();

        Task<SalaryEditRequest> GetByIdForId(string SalaryID);
    }
}