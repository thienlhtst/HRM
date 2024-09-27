using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Catalogs.Allowance;
using HRM.ViewModel.Catalogs.AllowanceRules;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Enums;

namespace HRM.Services.Catalog.Allowance
{
    public interface IAllowanceService
    {
        Task<int> Create(AllowanceCreateRequest request);

        Task<int> Update(AllowanceEditRequest request);

        Task<int> Delete(string AllowanceId);

        Task DeleteAllowanceAndRulesByProcedure(int AllowanceID);

        Task<AllowanceViewModel> GetByID(int AllowanceID);

        Task<PagedResult<AllowanceViewModel>> GetAllPage(GetAllowancePagingRequest request);

        Task<List<AllowanceViewModel>> GetList();

        Task<int> CreateAllowanceRules(List<AllowanceRulesCreateViewModel> request);

        Task<List<AllowanceRulesViewModel>> GetAllRules();

    }
}