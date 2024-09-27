using Microsoft.AspNetCore.Mvc.RazorPages;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.ViewModel.Dtos;
using HRM.ViewModel.Catalogs.Position;

namespace HRM.Services.Catalog.Positions
{
    public interface IManagePositionService
    {
        Task<int> Create(PositionCreateRequest request);

        Task<int> Update(PositionUpdateRequest request);

        Task<int> Delete(int PositionID);

        Task<PositionViewModel> GetByID(int PositionID);

        Task<List<PositionViewModel>> GetAll();

        Task<PagedResult<PositionViewModel>> GetAllPaging(GetPositionPagingRequest request);

        Task DeletePositionByProceDure (int id);
    }
}