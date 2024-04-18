using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Catalogs.Ranks;
using System;
using System.Collections.Generic;
using System.Linq;
using QLNS.ViewModel.Dtos;
using System.Text;
using System.Threading.Tasks;
using QLNS.Entity.Entities;

namespace QLNS.Services.Catalog.Ranks
{
    public interface IRankService
    {
        Task<PagedResult<RankVM>> GetAllPage(GetRankPagingRequest Request);

        Task<int> Create(RankCreateRequest request);

        Task<int> Update(RankEditRequest request);

        Task<int> Delete(string EmployeeID);

        Task<RankVM> GetById(string EmployeeID);

        Task<List<QLNS.Entity.Entities.Rank>> GetList();
        Task<RankEditRequest> GetByIdForEdit(string RankID);

        Task<List<RankRole>> GetRoleList();

        Task DeleteRankByProcedure(string id);
    }
}