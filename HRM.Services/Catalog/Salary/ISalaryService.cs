using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Catalogs.Salary;
using System;
using System.Collections.Generic;
using System.Linq;
using HRM.ViewModel.Dtos;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.Salary
{
    public interface ISalaryService
    {
        Task<PagedResult<SalaryVM>> GetAllPage(GetSalaryPagingRequest Request);

        Task<int> Create(SalaryCreateRequest request);

        Task<int> Update(SalaryEditRequest request);

        Task<int> Delete(int SalaryID);

        Task<SalaryViewModel> GetById(int SalaryID);

        Task<List<SalaryViewModel>> GetList();

        Task<SalaryEditRequest> GetByIdForId(string SalaryID);
    }
}