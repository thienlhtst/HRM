using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Catalogs.AllowanceRules;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface IAllowanceAPIClient
    {
        Task<bool> Create(AllowanceCreateRequest request);

        Task<bool> Update(AllowanceEditRequest request);

        Task<bool> Delete(string id);

        Task<AllowanceViewModel> GetByID(string id);

        Task<AllowanceEditRequest> GetByIdForEdit(string id);

        Task<PagedResult<AllowanceViewModel>> GetAllowancePaging(GetAllowancePaging request);

        Task<List<AllowanceRulesViewModel>> GetAllowanceRules();

        Task<bool> CreateAllowanceRules(AllowanceRulesCreateViewModel request);

        Task<List<AllowanceViewModel>> GetAll();
    }
}