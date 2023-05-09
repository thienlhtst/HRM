using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using QLNS.Services.Catalog.Days.Dtos.Manage;
using System.Threading.Tasks;
using QLNS.Services.Catalog.Days.Dtos;
using QLNS.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Dtos;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.Services.Catalog.Positions.Dtos;

namespace QLNS.Services.Catalog.Days
{
    public class PublicDayService : IPublicDayService
    {
        public readonly QLNSDbContext _context;
        public PublicDayService(QLNSDbContext context)
        {
            _context = context;
        }
        public async Task<List<DayViewModel>> GetAll()
        {
            var query = from p in _context.Days select p;

            var data = await query.Select(x => new DayViewModel()
            {
                ID = x.ID,
                Name = x.Name,
                Days = x.Days,
                Months = x.Months
            }).ToListAsync();
            return data;
        }


        public async Task<PagedResult<DayViewModel>> GetAllByCategoryID(GetPagingDayRequest request)
        {
            var query = from p in _context.Days select p;
            if (!string.IsNullOrEmpty(request.Keyword))
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
            var pagedResult = new PagedResult<DayViewModel> ()
            {

                TotalRecords = totalRow,
                PageSize = request.PageSize,
                PageIndex   = request.PageIndex,
                Items = data
            };
            return pagedResult;
        }
    }
}
