﻿using Microsoft.EntityFrameworkCore;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.ViewModel.Catalogs.LabourHours;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Enums;

namespace HRM.Services.Catalog.LabourHours
{
    public class LabourHourService : ILabourHourService
    {
        private readonly HRMDbContext _context;

        public LabourHourService(HRMDbContext context)
        {
            _context=context;
        }

        public async Task<int> Create(LabourHourCreateRequest request)
        {
            int id = await _context.LabourHours.CountAsync()+1;

            LabourHour entity = new LabourHour
            {
                Name = request.Name,
                Factor = request.Factor,
            };
            _context.LabourHours.Add(entity);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(LabourHourDeleteRequest request)
        {
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID.ToString() ==request.ID);
            var entity_day = await _context.Days.Where(x => x.IDLB.ToString()==request.ID).ToListAsync();
            if (entity!=null)
            {
                _context.LabourHours.Remove(entity);
                _context.Days.RemoveRange(entity_day);
                return await _context.SaveChangesAsync();
            }
            return -1;
        }

        public async Task<int> Edit(LabourHourUpdateRequest request)
        {
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID.ToString() ==request.ID);
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
            var entity = await _context.LabourHours.FirstOrDefaultAsync(x => x.ID.ToString() ==request);
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

        public async Task<List<GetListLabourHour>> GetList(language lan)
        {
            var query = from p in _context.LabourHours where p.Language ==lan select p ;
            var result = query.Select(x => new GetListLabourHour
            {
                ID=x.ID.ToString(),
                Name=x.Name,
                Factor= x.Factor,
                Days=x.Days
            }).ToList();

            return result;
        }
    }
}