using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Catalogs.Allowance;
using HRM.ViewModel.Catalogs.AllowanceRules;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.Allowance
{
    public interface IAllowanceService
    {
        Task<int> Create(AllowanceCreateRequest request);

        Task<int> Update(AllowanceEditRequest request);

        Task<int> Delete(string AllowanceId);

        Task DeleteAllowanceAndRulesByProcedure(string AllowanceID);

        Task<AllowanceViewModel> GetByID(string AllowanceID);

        Task<PagedResult<AllowanceViewModel>> GetAllPage(GetAllowancePagingRequest request);

        Task<List<AllowanceViewModel>> GetList();

        Task<int> CreateAllowanceRules(List<AllowanceRulesCreateViewModel> request);

        Task<List<AllowanceRulesViewModel>> GetAllRules();

    }
}