using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Catalogs.Levels;
using System;
using System.Collections.Generic;
using System.Linq;
using HRM.ViewModel.Dtos;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Entities;

namespace HRM.Services.Catalog.Ranks
{
    public interface ILevelService
    {
        Task<PagedResult<LevelViewModel>> GetAllPage(GetLevelPagingRequest Request);

        Task<int> Create(LevelCreateRequest request);

        Task<int> Update(LevelEditRequest request);

        Task<int> Delete(int EmployeeID);

        Task<LevelViewModel> GetById(int id);

        Task<List<LevelViewModel>> GetList();
        Task<LevelEditRequest> GetByIdForEdit(string RankID);

        Task<List<Role>> GetRoleList();

        Task DeleteRankByProcedure(int id);
    }
}