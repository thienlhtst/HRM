using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Allowance
{
    public interface IAllowanceService
    {
        Task<int> Create(AllowanceCreateRequest request);

        Task<int> Update(AllowanceEditRequest request);

        Task<int> Delete(string AllowanceId);

        Task<AllowanceViewModel> GetByID(string AllowanceID);

        Task<PagedResult<AllowanceViewModel>> GetAllPage(GetAllowancePagingRequest request);

        Task<List<AllowanceViewModel>> GetList();
    }
}