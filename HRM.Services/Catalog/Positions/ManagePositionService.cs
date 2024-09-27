using HRM.DataAccess;

using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.ViewModel.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using HRM.ViewModel.Catalogs.Position;

namespace HRM.Services.Catalog.Positions
{
    public class ManagePositionService : IManagePositionService
    {
        public readonly HRMDbContext _context;

        public ManagePositionService(HRMDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(PositionCreateRequest request)
        {
            var position = new Position()
            {
                ID = request.ID,
                Name = request.Name
            };
            _context.Add(position);
            await _context.SaveChangesAsync();
            return 1;
        }

        public async Task<int> Delete(int PositionID)
        {
            var position = await _context.Positions.FindAsync(PositionID);
            _context.Positions.Remove(position);
            return await _context.SaveChangesAsync();
        }

        public async Task DeletePositionByProceDure(int id)
        {
            var ID = new SqlParameter(@"ID", id);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeletePosition @ID", id);
        }

        public async Task<List<PositionViewModel>> GetAll()
        {
            var query = from p in _context.Positions select p;

            var data = await query.Select(x => new PositionViewModel()
            {
                ID = x.ID,
                Name = x.Name
            }).ToListAsync();

            return data;
        }

        public async Task<PagedResult<PositionViewModel>> GetAllPaging(GetPositionPagingRequest request)
        {
            var query = from p in _context.Positions select p;
            if (!string.IsNullOrEmpty(request.Keyword))
                query = query.Where(x => x.ID.ToString().Contains(request.Keyword) || x.Name.Contains(request.Keyword));
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.ID)).Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new PositionViewModel()
                {
                    ID = x.ID,
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

        public async Task<PositionViewModel> GetByID(int PositionID)
        {
            var position = await _context.Positions.FindAsync(PositionID);
            var positionvm = new PositionViewModel()
            {
                ID = position.ID,
                Name = position.Name
            };
            return positionvm;
        }

        public async Task<int> Update(PositionUpdateRequest request)
        {
            var position = await _context.Positions.FindAsync(request.ID);

            position.ID = request.ID;
            position.Name = request.Name;

            _context.Positions.Update(position);
            return await _context.SaveChangesAsync();
        }
    }
}