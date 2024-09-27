using Microsoft.EntityFrameworkCore;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.ViewModel.Catalogs.LabourDays;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Enums;

namespace HRM.Services.Catalog.LabourDay
{
    public class LabourdayService : ILabourDayService
    {
        private readonly HRMDbContext _context;

        public LabourdayService(HRMDbContext context)
        {
            _context=context;
        }

        public async Task<int> Create(LabourDayCreateRequest request)
        {
            int id = await _context.Days.CountAsync()+1;
            Day entity = new Day
            {
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
            var entity = await _context.Days.FirstOrDefaultAsync(x => x.ID.ToString() == request.ID);
            if (entity != null)
            {
                _context.Days.Remove(entity);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<int> Edit(LabourDayUpdateRequest request)
        {
            var entity = await _context.Days.FirstOrDefaultAsync(x => x.ID.ToString() == request.ID);
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

        public async Task<LabourDayDetailRequest> GetbyID(int request)
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
            var query = from p in _context.Days  select p;
            var result = await query.Select(x => new GetListLabourDay
            {
                ID = x.ID,
                IDLB = x.IDLB,
                Name = x.Name,
                Days = x.Days,
                Months = x.Months,
            }).ToListAsync();
            return result;
        }
    }
}