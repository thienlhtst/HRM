using Microsoft.AspNetCore.Mvc.RazorPages;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.ViewModel.Dtos;
using QLNS.ViewModel.Catalogs.Position;

namespace QLNS.Services.Catalog.Positions
{
    public interface IManagePositionService
    {
        Task<int> Create(PositionCreateRequest request);

        Task<int> Update(PositionUpdateRequest request);

        Task<int> Delete(string PositionID);

        Task<PositionViewModel> GetByID(string PositionID);

        Task<List<PositionViewModel>> GetAll();

        Task<PagedResult<PositionViewModel>> GetAllPaging(GetPositionPagingRequest request);

        Task DeletePositionByProceDure (string id);
    }
}