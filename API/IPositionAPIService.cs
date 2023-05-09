using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Positions.Dtos.Manage;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface IPositionAPIService
    {
        public Task<List<Position>> GetAll();

        Task<bool> Create(PositionCreateRequest request);

        Task<PositionViewModel> GetById(string id);

        Task<PositionUpdateRequest> GetByIdForEdit(string id);

        Task<PagedResult<PositionViewModel>> GetPositionPaging(GetPagingPositionRequest request);

        Task<bool> Update(PositionUpdateRequest request);

        Task<bool> Delete(string PositionID);
    }
}