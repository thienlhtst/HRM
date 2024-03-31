using Azure.Core;
using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.ViewModel.Catalogs.Salary;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Salary
{
    public class SalaryService : ISalaryService
    {
        private readonly QLNSDbContext _context;

        public SalaryService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<PagedResult<SalaryVM>> GetAllPage(GetSalaryPagingRequest Request)
        {
            var query = from p in _context.Salaries
                        join pt in _context.Ranks on p.RankID equals pt.IDrank
                        join pp in _context.Positions on p.PositionID equals pp.IDposition
                        select new { p, pt, pp };
            if (!string.IsNullOrEmpty(Request.Keyword))
            {
                query = query.Where(x => x.pt.Name.Contains(Request.Keyword) || x.pp.Name.Contains(Request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x=>Convert.ToInt32(x.p.ID)).Skip((Request.PageIndex - 1) * Request.PageSize)
                .Take(Request.PageSize)
                .Select(x => new SalaryVM()
                {
                    ID = x.p.ID,
                    RankName = x.pt.Name,
                    PositionName = x.pp.Name,
                    Money = x.p.Money
                }).ToListAsync();
            var pagedView = new PagedResult<SalaryVM>()
            {
                TotalRecords = totalRow,
                PageIndex = Request.PageIndex,
                PageSize = Request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<int> Create(SalaryCreateRequest request)
        {
            var rank = new Entity.Entities.Salary()
            {
                ID = request.ID,
                RankID = request.RankID,
                PositionID = request.PositionID,
                Money = request.Money
            };
            _context.Salaries.Add(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(string rankID)
        {
            var rank = await _context.Salaries.FindAsync(rankID);
            _context.Salaries.Remove(rank);
            return await _context.SaveChangesAsync();
        }

        public async Task<SalaryVM> GetById(string SalaryID)
        {
            var salary = await _context.Salaries.FindAsync(SalaryID);
            var salaryvm = new SalaryVM()
            {
                ID = salary.ID,
                RankName = salary.RankID,
                PositionName = salary.PositionID,
                Money = salary.Money
            };
            return salaryvm;
        }

        public async Task<List<QLNS.Entity.Entities.Salary>> GetList()
        {
            var query = from p in _context.Salaries select p;
            var data = await query.Select(x => new QLNS.Entity.Entities.Salary()
            {
                ID = x.ID,
                RankID = x.RankID,
                PositionID = x.PositionID,
                Money = x.Money
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(SalaryEditRequest request)
        {
            var rank = await _context.Salaries.FindAsync(request.ID);
            rank.ID = request.ID;
            rank.RankID = request.RankID;
            rank.PositionID = request.PositionID;
            rank.Money = request.Money;
            _context.Salaries.Update(rank);
            return await _context.SaveChangesAsync();
        }

        public Task<SalaryEditRequest> GetByIdForId(string SalaryID)
        {
            throw new NotImplementedException();
        }
    }
}