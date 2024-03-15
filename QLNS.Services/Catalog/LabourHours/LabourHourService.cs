using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.LabourHours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.LabourHours
{
    public class LabourHourService : ILabourHourService
    {
        private readonly QLNSDbContext _context;

        public LabourHourService(QLNSDbContext context)
        {
            _context=context;
        }

        public async Task<int> Create(LabourHourCreateRequest request)
        {
            int id = await _context.LabourHours.CountAsync()+1;

            LabourHour entity = new LabourHour
            {
                ID=id.ToString(),
                Name = request.Name,
                Factor = request.Factor,
            };
            _context.LabourHours.Add(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(LabourHourDeleteRequest request)
        {
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID ==request.ID);
            if (entity!=null)
            {
                _context.Remove(entity);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<int> Edit(LabourHourUpdateRequest request)
        {
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID ==request.ID);
            if (entity!=null)
            {
                entity.Name= request.Name;
                entity.Factor= request.Factor;
                _context.Update(entity);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<LabourHourDetailRequest> GetbyID(string request)
        {
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID ==request);
            if (entity!=null)
            {
                LabourHourDetailRequest detail_request = new LabourHourDetailRequest
                {
                    ID=entity.ID,
                    Name=entity.Name,
                    Factor= entity.Factor,
                };
                return detail_request;
            }
            return null;
        }

        public async Task<List<GetListLabourHour>> GetList()
        {
            var query = await _context.LabourHours.ToListAsync();
            var result = query.Select(x => new GetListLabourHour
            {
                ID=x.ID,
                Name=x.Name,
                Factor= x.Factor,
                Days=x.Days
            }).ToList();

            return result;
        }
    }
}