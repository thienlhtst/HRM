﻿using Azure.Core;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using HRM.DataAccess;
using HRM.Entity.RelationShips;
using HRM.ViewModel.Catalogs.Allowance;
using HRM.ViewModel.Catalogs.AllowanceRules;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Enums;

namespace HRM.Services.Catalog.Allowance
{
    public class AllowanceService : IAllowanceService
    {
        private readonly HRMDbContext _context;

        public AllowanceService(HRMDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(AllowanceCreateRequest request)
        {
            var allowance = new HRM.Entity.Entities.Allowance
            {
                ID = request.ID,
                Name = request.Name,
                Money = request.Money,
                
            };
            _context.Allowances.Add(allowance);
            return await _context.SaveChangesAsync();
    
        }

        public async Task<int> CreateAllowanceRules(List<AllowanceRulesCreateViewModel> request)
        {
            var allowancerules = request.Select(x => new HRM.Entity.RelationShips.AllowanceRules
            {
                AllowanceID = x.AllowanceID,
                EmployeeID = x.EmployeeID,
                Date = x.Date,
                
            }).ToList();
            _context.AllowanceRules.AddRange(allowancerules);
            await _context.SaveChangesAsync();
            return allowancerules.Count;
        }

        public async Task<int> Delete(string AllowanceId)
        {
            var allowance = await _context.Allowances.FindAsync(AllowanceId);
            _context.Allowances.Remove(allowance);
            return await _context.SaveChangesAsync();
        }

        public async Task DeleteAllowanceAndRulesByProcedure(string AllowanceID)
        {
            var id = new SqlParameter("@ID", AllowanceID);
            await _context.Database.ExecuteSqlRawAsync("EXEC DeleteAllowanceAndRule @ID", id);
        }

        public async Task<PagedResult<AllowanceViewModel>> GetAllPage(GetAllowancePagingRequest request)
        {
            var query = from p in _context.Allowances select new { p };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.p.ID.ToString().Contains(request.Keyword) || x.p.Name.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.p.ID)).Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new AllowanceViewModel()
                {
                    ID = x.p.ID,
                    Name = x.p.Name,
                    Money = x.p.Money
                }).ToListAsync();
            var pagedView = new PagedResult<AllowanceViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<List<AllowanceRulesViewModel>> GetAllRules()
        {
            var query = from p in _context.Allowances
                        join pp in _context.AllowanceRules on p.ID equals pp.AllowanceID
                        join px in _context.Employee on pp.EmployeeID equals px.ID
                        select new { p, px, pp };



            var data = await query.GroupBy(x => x.pp.AllowanceID).Select(e => new AllowanceRulesViewModel()
             {
                 AllowanceName = e.First().p.Name,
                 EmployeeName = String.Join(",", e.Select(t => t.px.FirstName + " " + t.px.MiddleName + " " + t.px.LastName)),
                 Date = e.First().pp.Date
             }).ToListAsync();

            return data;
        }

        public async Task<AllowanceViewModel> GetByID(string AllowanceID)
        {
            var allowance = await _context.Allowances.FindAsync(AllowanceID);
            var allo = new AllowanceViewModel()
            {
                ID = allowance.ID,
                Name = allowance.Name,
                Money = allowance.Money
            };
            return allo;
        }

        public async Task<List<AllowanceViewModel>> GetList()
        {
            var query = from p in _context.Allowances select p ;
            var data = await query.Select(x=>new AllowanceViewModel()
            {
                ID = x.ID,
                Name = x.Name,

            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(AllowanceEditRequest request)
        {
            var allowance = await _context.Allowances.FindAsync(request.ID);
            if (allowance == null) return 0;
            allowance.ID = request.ID;
            allowance.Name = request.Name;
            allowance.Money = request.Money;
            _context.Allowances.Update(allowance);
            return await _context.SaveChangesAsync();
        }
    }
}