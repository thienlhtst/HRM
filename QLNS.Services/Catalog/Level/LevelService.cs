using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Ranks;
using QLNS.ViewModel.Catalogs.Levels;
using QLNS.ViewModel.Dtos;

namespace QLNS.Services.Catalog.Levels
{
    public class LevelService : ILevelService
    {
        private readonly QLNSDbContext _context;

        public LevelService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<List<Level>> GetAll()
        {
            return await _context.Levels.ToListAsync();
        }

        public async Task<PagedResult<LevelViewModel>> GetAllPage(GetLevelPagingRequest Request)
        {
            var query = from p in _context.Levels
                        join pt in _context.Roles on p.RoleID equals pt.ID
                        select new { p, pt };
            if (!string.IsNullOrEmpty(Request.Keyword))
            {
                query = query.Where(x => x.p.ID.Contains(Request.Keyword) || x.p.Name.Contains(Request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.p.ID)).Skip((Request.PageIndex - 1) * Request.PageSize)
                .Take(Request.PageSize)
                .Select(x => new LevelViewModel()
                {
                    ID = x.p.ID,
                    Name = x.p.Name,
                    RoleName = x.pt.Name
                }).ToListAsync();
            var pagedView = new PagedResult<LevelViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = Request.PageIndex,
                PageSize = Request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<int> Create(LevelCreateRequest request)
        {
            var rank = new Entity.Entities.Level()
            {
                ID = request.ID,
                RoleID = request.RoleID,
                Name = request.Name
            };
            _context.Levels.Add(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(string rankID)
        {
            var rank = await _context.Levels.FindAsync(rankID);
            _context.Levels.Remove(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<LevelViewModel> GetById(string RankID)
        {
            var rank = await _context.Levels.FindAsync(RankID);
            var rankvm = new LevelViewModel()
            {
                ID = rank.ID,
                RoleName = rank.RoleID,
                Name = rank.Name
            };
            return rankvm;
        }

        public async Task<LevelEditRequest> GetByIdForEdit(string RankID)
        {
            var rank = await _context.Levels.FindAsync(RankID);
            var rankvm = new LevelEditRequest()
            {
                ID = rank.ID,
                RoleID = rank.RoleID,
                Name = rank.Name
            };
            return rankvm;
        }

        public async Task<List<LevelViewModel>> GetList()
        {
            var query = from p in _context.Levels select p;
            var data = await query.Select(x => new LevelViewModel()
            {
                ID = x.ID,
                RoleName = x.RoleID,
                Name = x.Name
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(LevelEditRequest request)
        {
            var rank = await _context.Levels.FindAsync(request.ID);
            rank.ID = request.ID;
            rank.RoleID = request.RoleID;
            rank.Name = request.Name;
            _context.Levels.Update(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<Role>> GetRoleList()
        {
            var query = from p in _context.Roles select p;
            var data = await query.Select(x => new QLNS.Entity.Entities.Role()
            {
                ID = x.ID,
                Name = x.Name
            }).ToListAsync();
            return data;
        }

        public async Task DeleteRankByProcedure(string id)
        {
            var ID = new SqlParameter(@"ID", id);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeleteRank @ID", ID);
        }
    }
}