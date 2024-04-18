using QLNS.DataAccess;
using QLNS.Services.Catalog.Positions.Dtos;
using QLNS.Services.Catalog.Positions.Dtos.Manage;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.ViewModel.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;

namespace QLNS.Services.Catalog.Positions
{
    public class ManagePositionService : IManagePositionService
    {
        public readonly QLNSDbContext _context;

        public ManagePositionService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(PositionCreateRequest request)
        {
            var position = new Position()
            {
                IDposition = request.ID,
                Name = request.Name
            };
            _context.Add(position);
            await _context.SaveChangesAsync();
            return 1;
        }

        public async Task<int> Delete(string PositionID)
        {
            var position = await _context.Positions.FindAsync(PositionID);
            _context.Positions.Remove(position);
            return await _context.SaveChangesAsync();
        }

        public async Task DeletePositionByProceDure(string id)
        {
            var ID = new SqlParameter(@"IDposition", id);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeletePosition @IDposition", id);
        }

        public async Task<List<PositionViewModel>> GetAll()
        {
            var query = from p in _context.Positions select p;

            var data = await query.Select(x => new PositionViewModel()
            {
                IDposition = x.IDposition,
                Name = x.Name
            }).ToListAsync();

            return data;
        }

        public async Task<PagedResult<PositionViewModel>> GetAllPaging(GetPagingPositionRequest request)
        {
            var query = from p in _context.Positions select p;
            if (!string.IsNullOrEmpty(request.Keyword))
                query = query.Where(x => x.IDposition.Contains(request.Keyword) || x.Name.Contains(request.Keyword));
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.IDposition)).Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new PositionViewModel()
                {
                    IDposition = x.IDposition,
                    Name = x.Name
                }).ToListAsync();
            var pagedView = new PagedResult<PositionViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<PositionViewModel> GetByID(string PositionID)
        {
            var rank = await _context.Positions.FindAsync(PositionID);
            var rankvm = new PositionViewModel()
            {
                IDposition = rank.IDposition,
                Name = rank.Name
            };
            return rankvm;
        }

        public async Task<int> Update(PositionUpdateRequest request)
        {
            var position = await _context.Positions.FindAsync(request.ID);

            position.IDposition = request.ID;
            position.Name = request.Name;

            _context.Positions.Update(position);
            return await _context.SaveChangesAsync();
        }
    }
}