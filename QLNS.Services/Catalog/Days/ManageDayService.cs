using QLNS.DataAccess;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using QLNS.Services.Catalog.Days.Dtos.Manage;
using System.Threading.Tasks;
using QLNS.Services.Catalog.Days.Dtos;
using Azure.Core;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Microsoft.EntityFrameworkCore;
using QLNS.ViewModel.Dtos;

namespace QLNS.Services.Catalog.Days
{
    public class ManageDayService : IManageDayService
    {
        public readonly QLNSDbContext _context;
        public ManageDayService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task AddViewcount(int DayID)
        {
            var day = await _context.Days.FindAsync(DayID);
            await _context.SaveChangesAsync();
        }

        public async Task<int> Create(DayCreateRequest request)
        {
            var day = new Day()
            {
                ID = request.ID,
                Name = request.Name,
                Days = request.Days,
                Months = request.Months
            };
            _context.Days.Add(day);
             await _context.SaveChangesAsync();
            return 1;
        }

        public async Task<int> Delete(int DayId)
        {
            var day = await _context.Days.FindAsync(DayId);
            _context.Days.Remove(day);
            return await _context.SaveChangesAsync();
        }
        public async Task<List<DayViewModel>> GetAll()
        {
            var query = from p in _context.Days select p;

            var data = await query.Select(x => new DayViewModel()
               {
                ID=x.ID,
                Name = x.Name,
                Days = x.Days,
                Months = x.Months
               }).ToListAsync();
            return data;
        }

        public async Task<PagedResult<DayViewModel>> GetAllPaging(GetPagingDayRequest request)
        {
            var query = from p in _context.Days select p;
            if(!string.IsNullOrEmpty(request.Keyword))
                query = query.Where(x => x.Name.Contains(request.Keyword));
            int totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new DayViewModel()
            {
                ID = x.ID,
                Name = x.Name,
                Days = x.Days,
                Months = x.Months
            }).ToListAsync();
            var pagedResult = new PagedResult<DayViewModel>()
            {
                TotalRecords = totalRow,
                Items = data
            };
            return pagedResult;

        }

        public Task<DayViewModel> GetById(int DayId)
        {
            throw new NotImplementedException();
        }

        public async Task<int> Update(DayUpdateRequest request)
        {
            var day = await _context.Days.FindAsync(request.ID);
            day.ID = request.ID;
            day.Name = request.Name;
            day.Days = request.Days;
            day.Months = request.Months;
            _context.Days.Update(day);
            return await _context.SaveChangesAsync();
        }

        public async Task<bool> UpdateName(int dayID, string newName)
        {
            throw new NotImplementedException();
        }
    }
}
