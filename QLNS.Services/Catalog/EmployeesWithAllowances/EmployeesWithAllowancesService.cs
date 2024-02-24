using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Services.Catalog.WorkHour;
using QLNS.ViewModel.Catalogs.EmployeesWithAllowances;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.EmployeesWithAllowances
{
    public class EmployeesWithAllowancesService : IEmployeesWithAllowancesService
    {
        private readonly IWorkHourService _workHourService;
        private readonly QLNSDbContext _context;

        public EmployeesWithAllowancesService(QLNSDbContext context, IWorkHourService workHourService)
        {
            _context = context;
            _workHourService = workHourService;
        }

        public async Task<List<QLNS.Entity.RelationShips.EmployeesWithAllowances>> check(EwaAutoCheckRequest request)
        {
            var t = from p in _context.EmployeesWithAllowances
                    where p.Date.Equals(DateTime.Parse(request.Year + "-" + request.Month + "-" + request.Day))
                    select p;
            var a = await t.ToListAsync();
            return a;
        }

        public async Task<int> auto(EwaAutoCheckRequest request)
        {
            var a = 0;
            var query = from p in _context.WorkHours
                        where p.Day.Equals(request.Day) && p.Month.Equals(request.Month) && p.Year.Equals(request.Year)
                        select p;
            var t = await (from p in _context.EmployeesWithAllowances
                           where p.Date.Equals(DateTime.Parse(request.Year + "-" + request.Month + "-" + request.Day))
                           select p).ToListAsync();
            foreach (var item in query)
            {
                int kt = 0;
                if (t != null)
                    foreach (var item2 in t)
                    {
                        if (item.EmployeesID.Equals(item2.EmployeeID) && request.AllowanceID.Equals(item2.AllowanceID))
                            kt = 1;
                    }
                if (kt == 0)
                {
                    var ewa = new QLNS.Entity.RelationShips.EmployeesWithAllowances()
                    {
                        AllowanceID = request.AllowanceID,
                        EmployeeID = item.EmployeesID,
                        Date = DateTime.Parse(request.Year + "-" + request.Month + "-" + request.Day)
                    };
                    _context.EmployeesWithAllowances.Add(ewa);
                }
            }
            a = await _context.SaveChangesAsync();
            return a;
        }

        // employee, allowance (name)
        public async Task<PagedResult<EwaAutoNow>> EWANow(GetEwaRequest request)
        {
            var t = 0;
            var query = from p in _context.EmployeesWithAllowances
                        join pt in _context.Employee on p.EmployeeID equals pt.ID
                        join px in _context.Allowances on p.AllowanceID equals px.ID
                        where p.Date.Equals(request.date)
                        select new { p, pt, px };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.p.EmployeeID.Contains(request.Keyword));
            }
            var totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new EwaAutoNow()
                {
                    EmployeeName = x.pt.FirstName + " " + x.pt.MiddleName + " " + x.pt.LastName,
                    AllowanceName = x.px.Name,
                    Money = x.px.Money
                }).ToListAsync();
            var pagedView = new PagedResult<EwaAutoNow>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<int> Create(CreateEWA request)
        {
            var ea = new Entity.RelationShips.EmployeesWithAllowances()
            {
                EmployeeID = request.EmployeeID,
                AllowanceID = request.AllowanceID,
                Date = request.Date
            };
            _context.EmployeesWithAllowances.Add(ea);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(string id)
        {
            var ea = await _context.EmployeesWithAllowances.FindAsync(id);
            _context.EmployeesWithAllowances.Remove(ea);
            return await _context.SaveChangesAsync();
        }

        public async Task<PagedResult<EmployeesWithAllowancesViewModel>> GetAllPage(GetEmployeesWithAllowancesPagingRequest request)
        {
            var query = from p in _context.EmployeesWithAllowances
                        join pt in _context.Employee on p.EmployeeID equals pt.ID
                        join px in _context.Allowances on p.AllowanceID equals px.ID
                        select new { p, pt, px }
                        ;
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.p.EmployeeID.Contains(request.Keyword));
            }
            var totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new EmployeesWithAllowancesViewModel()
                {
                    ID = x.p.ID,
                    EmployeeID = x.pt.LastName,
                    AllowanceID = x.px.Name,
                    Date = x.p.Date
                }).ToListAsync();
            var pagedView = new PagedResult<EmployeesWithAllowancesViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<EmployeesWithAllowancesViewModel> GetByID(string id)
        {
            var emallo = await _context.EmployeesWithAllowances.FindAsync(id);
            var ea = new EmployeesWithAllowancesViewModel()
            {
                ID = emallo.ID,
                EmployeeID = emallo.EmployeeID,
                AllowanceID = emallo.AllowanceID,
                Date = emallo.Date
            };
            return ea;
        }

        public async Task<List<EmployeesWithAllowancesViewModel>> GetList()
        {
            var query = from p in _context.EmployeesWithAllowances
                        join pt in _context.Employee on p.EmployeeID equals pt.ID
                        join px in _context.Allowances on p.AllowanceID equals px.ID
                        select new { p, pt, px }
                        ;
            var data = await query.Select(x => new EmployeesWithAllowancesViewModel()
            {
                ID = x.p.ID,
                EmployeeID = x.pt.ID,
                AllowanceID = x.px.ID,
                Date = x.p.Date
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(EmployeesWithAllowancesEditRequest request)
        {
            var emal = await _context.EmployeesWithAllowances.FindAsync(request.ID);
            emal.ID = request.ID;
            emal.EmployeeID = request.EmployeeID;
            emal.AllowanceID = request.AllowanceID;
            emal.Date = request.Date;
            _context.EmployeesWithAllowances.Update(emal);
            return await _context.SaveChangesAsync();
        }
    }
}