using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Catalogs.Levels;
using System;
using System.Collections.Generic;
using System.Linq;
using QLNS.ViewModel.Dtos;
using System.Text;
using System.Threading.Tasks;
using QLNS.Entity.Entities;

namespace QLNS.Services.Catalog.Ranks
{
    public interface ILevelService
    {
        Task<PagedResult<LevelViewModel>> GetAllPage(GetLevelPagingRequest Request);

        Task<int> Create(LevelCreateRequest request);

        Task<int> Update(LevelEditRequest request);

        Task<int> Delete(string EmployeeID);

        Task<LevelViewModel> GetById(string EmployeeID);

        Task<List<LevelViewModel>> GetList();
        Task<LevelEditRequest> GetByIdForEdit(string RankID);

        Task<List<Role>> GetRoleList();

        Task DeleteRankByProcedure(string id);
    }
}