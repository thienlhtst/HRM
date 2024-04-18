using Azure.Core;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Ranks
{
    public class RankService : IRankService
    {
        private readonly QLNSDbContext _context;

        public RankService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<List<Rank>> GetAll()
        {
            return await _context.Ranks.ToListAsync();
        }

        public async Task<PagedResult<RankVM>> GetAllPage(GetRankPagingRequest Request)
        {
            var query = from p in _context.Ranks
                        join pt in _context.RankRoles on p.RankRoleID equals pt.ID
                        select new { p, pt };
            if (!string.IsNullOrEmpty(Request.Keyword))
            {
                query = query.Where(x => x.p.IDrank.Contains(Request.Keyword) || x.p.Name.Contains(Request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.p.IDrank)).Skip((Request.PageIndex - 1) * Request.PageSize)
                .Take(Request.PageSize)
                .Select(x => new RankVM()
                {
                    ID = x.p.IDrank,
                    Name = x.p.Name,
                    NameRankRole = x.pt.Name
                }).ToListAsync();
            var pagedView = new PagedResult<RankVM>()
            {
                TotalRecords = totalRow,
                PageIndex = Request.PageIndex,
                PageSize = Request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<int> Create(RankCreateRequest request)
        {
            var rank = new Entity.Entities.Rank()
            {
                IDrank = request.IDrank,
                RankRoleID = request.RankRoleID,
                Name = request.Name
            };
            _context.Ranks.Add(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(string rankID)
        {
            var rank = await _context.Ranks.FindAsync(rankID);
            _context.Ranks.Remove(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<RankVM> GetById(string RankID)
        {
            var rank = await _context.Ranks.FindAsync(RankID);
            var rankvm = new RankVM()
            {
                ID = rank.IDrank,
                NameRankRole = rank.RankRoleID,
                Name = rank.Name
            };
            return rankvm;
        }

        public async Task<RankEditRequest> GetByIdForEdit(string RankID)
        {
            var rank = await _context.Ranks.FindAsync(RankID);
            var rankvm = new RankEditRequest()
            {
                IDrank = rank.IDrank,
                RankRoleID = rank.RankRoleID,
                Name = rank.Name
            };
            return rankvm;
        }

        public async Task<List<QLNS.Entity.Entities.Rank>> GetList()
        {
            var query = from p in _context.Ranks select p;
            var data = await query.Select(x => new QLNS.Entity.Entities.Rank()
            {
                IDrank = x.IDrank,
                RankRoleID = x.RankRoleID,
                Name = x.Name
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(RankEditRequest request)
        {
            var rank = await _context.Ranks.FindAsync(request.IDrank);
            rank.IDrank = request.IDrank;
            rank.RankRoleID = request.RankRoleID;
            rank.Name = request.Name;
            _context.Ranks.Update(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<RankRole>> GetRoleList()
        {
            var query = from p in _context.RankRoles select p;
            var data = await query.Select(x => new QLNS.Entity.Entities.RankRole()
            {
                ID = x.ID,
                Name = x.Name
            }).ToListAsync();
            return data;
        }

        public async Task DeleteRankByProcedure(string id)
        {
            var ID = new SqlParameter(@"IDrank", id);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeleteRank @IDrank", ID);
        }
    }
}