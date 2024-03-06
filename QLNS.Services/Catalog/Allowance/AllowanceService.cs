using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Catalogs.AllowanceRules;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Allowance
{
    public class AllowanceService : IAllowanceService
    {
        private readonly QLNSDbContext _context;

        public AllowanceService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(AllowanceCreateRequest request)
        {
            var allowance = new QLNS.Entity.Entities.Allowance()
            {
                ID = request.ID,
                Name = request.Name,
                Money = request.Money
            };
            _context.Allowances.Add(allowance);
            await _context.SaveChangesAsync();
            return Convert.ToInt32(allowance.ID);
        }

        public async Task<int> CreateAllowanceRules(AllowanceRulesCreateViewModel request)
        {
            var allowancerules = new QLNS.Entity.RelationShips.AllowanceRules()
            {
                AllowanceID = request.AllowanceID,
                EmployeeID = request.EmployeeID,
                Date = request.Date,
            };
            _context.AllowanceRules.Add(allowancerules);
            await _context.SaveChangesAsync();
            return Convert.ToInt32(allowancerules.AllowanceID);
        }

        public async Task<int> Delete(string AllowanceId)
        {
            var allowance = await _context.Allowances.FindAsync(AllowanceId);
            _context.Allowances.Remove(allowance);
            return await _context.SaveChangesAsync();
        }

        public async Task<PagedResult<AllowanceViewModel>> GetAllPage(GetAllowancePagingRequest request)
        {
            var query = from p in _context.Allowances select new { p };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.p.ID.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
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

        public async Task<PagedResult<AllowanceRulesViewModel>> GetAllPageRules(GetAllowanceRulesPagingRequest request)
        {
            var query = from p in _context.Allowances
                        join pp in _context.AllowanceRules on p.ID equals pp.AllowanceID
                        join px in _context.Employee on pp.EmployeeID equals px.ID

                        select new { p, px, pp };
            if (!string.IsNullOrEmpty(request.Keywork))
            {
                query = query.Where(x => x.px.ID == request.Keywork);
            }
            int totalRow = query.Count();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new AllowanceRulesViewModel()
                {
                    AllowanceName = x.p.Name,
                    EmployeeName = x.px.FirstName + " " + x.px.MiddleName + " " + x.px.LastName,
                    Date = x.pp.Date
                }).ToListAsync();
            var pagedView = new PagedResult<AllowanceRulesViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
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
            var query = from p in _context.Allowances select p;
            var data = await query.Select(x => new AllowanceViewModel()
            {
                ID = x.ID,
                Name = x.Name,
                Money = x.Money
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