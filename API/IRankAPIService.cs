using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface IRankAPIService
    {
        public Task<List<Rank>> GetAll();

        Task<bool> Create(RankCreateRequest request);

        Task<RankVM> GetById(string id);

        Task<RankEditRequest> GetByIdForEdit(string id);

        Task<PagedResult<RankVM>> GetRankPaging(GetRankPagingRequest request);

        Task<bool> Update(RankEditRequest request);

        Task<bool> Delete(string RankID);
    }
}