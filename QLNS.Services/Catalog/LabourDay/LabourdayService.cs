using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.LabourDays;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.LabourDay
{
    public class LabourdayService : ILabourDayService
    {
        private readonly QLNSDbContext _context;

        public LabourdayService(QLNSDbContext context)
        {
            _context=context;
        }

        public async Task<int> Create(LabourDayCreateRequest request)
        {
            int id = await _context.Days.CountAsync()+1;
            Day entity = new Day
            {
                ID= id.ToString(),
                IDLB =request.IDLB,
                Name = request.Name,
                Days = request.Days,
                Months = request.Months,
            };
            _context.Days.Add(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(LabourDayDeleteRequest request)
        {
            var entity = await _context.Days.FirstOrDefaultAsync(x => x.ID == request.ID);
            if (entity != null)
            {
                _context.Days.Remove(entity);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<int> Edit(LabourDayUpdateRequest request)
        {
            var entity = await _context.Days.FirstOrDefaultAsync(x => x.ID == request.ID);
            if (entity != null)
            {
                entity.IDLB =request.IDLB;
                entity.Name = request.Name;
                entity.Days = request.Days;
                entity.Months = request.Months;
                _context.Days.Update(entity);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<LabourDayDetailRequest> GetbyID(string request)
        {
            var entity = await _context.Days.FirstOrDefaultAsync(x => x.ID == request);
            if (entity!=null)
            {
                LabourDayDetailRequest detail_request = new LabourDayDetailRequest
                {
                    ID = entity.ID,
                    IDLB = entity.IDLB,
                    Name = entity.Name,
                    Days = entity.Days,
                    Months = entity.Months,
                };
                return detail_request;
            }
            return null;
        }

        public async Task<List<GetListLabourDay>> GetList()
        {
            var query = await _context.Days.ToListAsync();
            var result = query.Select(x => new GetListLabourDay
            {
                ID = x.ID,
                IDLB = x.IDLB,
                Name = x.Name,
                Days = x.Days,
                Months = x.Months,
            }).ToList();
            return result;
        }
    }
}