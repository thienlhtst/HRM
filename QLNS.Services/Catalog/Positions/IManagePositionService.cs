using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Services.Catalog.Positions.Dtos;
using QLNS.Services.Catalog.Positions.Dtos.Manage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.ViewModel.Dtos;

namespace QLNS.Services.Catalog.Positions
{
    public interface IManagePositionService
    {
        Task<int> Create(PositionCreateRequest request);

        Task<int> Update(PositionUpdateRequest request);

        Task<int> Delete(string PositionID);

        Task<PositionViewModel> GetByID(string PositionID);

        Task<List<PositionViewModel>> GetAll();

        Task<PagedResult<PositionViewModel>> GetAllPaging(GetPagingPositionRequest request);
    }
}