using Azure.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.IdentityModel.Tokens;
using QLNS.DataAccess;
using QLNS.DataAccess.Extenstions;
using QLNS.Entity.Entities;
using QLNS.Entity.RelationShips;
using QLNS.ViewModel.Catalogs.Levels;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.WorkHour
{
    public class WorkhourService : IWorkHourService
    {
        private readonly QLNSDbContext _context;

        public WorkhourService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<List<WorkHourVM>> GetList()
        {
            var query = from p in _context.WorkHours
                        join pt in _context.Employee on p.EmployeesID equals pt.ID
                        join pp in _context.LabourHours on p.LBDID equals pp.ID
                        select new { p, pt, pp };

            var data = await query.Select(x => new WorkHourVM()
            {
                ID = x.p.ID,
                FirstName = x.pt.FirstName,
                LastName = x.pt.LastName,
                LBD = x.pp.Name,
                Day = x.p.Day,
                Month = x.p.Month,
                Year = x.p.Year,
                HourCheckin = x.p.HourCheckin,
                MinuteCheckin = x.p.MinuteCheckin,
                HourCheckout = x.p.HourCheckout,
                MinuteCheckout = x.p.MinuteCheckout,
            }).ToListAsync();

            return data;
        }

        public async Task<int> Checkin(CheckinModel checkin)
        {
            var check = await _context.WorkHours.FirstOrDefaultAsync(
                x =>
                x.EmployeesID == checkin.EmployeesID &&
                x.MinuteCheckout == 0 &&
                x.HourCheckout == 0 && x.Day == checkin.Day &&
                x.Month == checkin.Month && x.Year == checkin.Year
                );
            if (check == null)
            {
                var LB = await _context.Days.FirstOrDefaultAsync(x =>
                x.Months == checkin.Month &&
                x.Days == checkin.Day
                );
                if (LB == null)
                    checkin.LBDID = "1";
                else
                    checkin.LBDID = LB.IDLB;

                var workhour = new Entity.RelationShips.WorkHour()
                {
                    EmployeesID = checkin.EmployeesID,
                    LBDID = checkin.LBDID,
                    Day = checkin.Day,
                    Month = checkin.Month,
                    Year = checkin.Year,
                    HourCheckin = checkin.HourCheckin,
                    MinuteCheckin = checkin.MinuteCheckin,
                    HourCheckout = 0,
                    MinuteCheckout = 0,
                };

                _context.WorkHours.Add(workhour);
                return await _context.SaveChangesAsync();
            }
            return -2;
        }

        public async Task<int> Checkout(CheckoutModel checkout)
        {
            var whcheckout = await _context.WorkHours.FirstOrDefaultAsync(x =>
            x.EmployeesID == checkout.EmployeesID &&
            x.Day == checkout.Day &&
            x.Month == checkout.Month &&
            x.Year == checkout.Year &&
            x.HourCheckin != 0

            );
            if (whcheckout == null) throw new QLNSDbException($" You {checkout.EmployeesID} dont have check in yet ");
            whcheckout.HourCheckout = checkout.HourCheckout;
            whcheckout.MinuteCheckout = checkout.MinuteCheckout;
            _context.WorkHours.Update(whcheckout);
            return await _context.SaveChangesAsync();
        }

        public async Task<int> Delete(int ID)
        {
            var workhour = await _context.WorkHours.FindAsync(ID);
            if (workhour == null) throw new QLNSDbException($"Cannot find a product: {ID}");
            _context.WorkHours.Remove(workhour);
            return await _context.SaveChangesAsync();
        }

        public async Task<PagedResult<WorkHourVM>> GetAllPage(GetWorkHourAllPage request)
        {
            var query = from p in _context.WorkHours
                        join pt in _context.Employee on p.EmployeesID equals pt.ID
                        join pp in _context.LabourHours on p.LBDID equals pp.ID
                        select new { p, pt, pp };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.pt.LastName.Contains(request.Keyword) || x.pp.Name.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.OrderBy(x => Convert.ToInt32(x.p.ID)).Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new WorkHourVM()
                {
                    ID = x.p.ID,
                    FirstName = x.pt.FirstName,
                    LastName = x.pt.LastName,
                    LBD = x.pp.Name,
                    Day = x.p.Day,
                    Month = x.p.Month,
                    Year = x.p.Year,
                    HourCheckin = x.p.HourCheckin,
                    MinuteCheckin = x.p.MinuteCheckin,
                    HourCheckout = x.p.HourCheckout,
                    MinuteCheckout = x.p.MinuteCheckout,
                }).ToListAsync();
            var pagedView = new PagedResult<WorkHourVM>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public Task<bool> UpdateCheckin(WorkHourEditCheckinRequest request)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateCheckout(WorkHourEditCheckoutRequest request)
        {
            throw new NotImplementedException();
        }

        public async Task<WorkHourUpdateRequest> GetById(int id)
        {
            var a = await (from wh in _context.WorkHours
                           join emp in _context.Employee on wh.EmployeesID equals emp.ID
                           join pp in _context.LabourHours on wh.LBDID equals pp.ID
                           where wh.ID == id
                           select new { wh, emp, pp }).ToListAsync();
            if (a == null) return null;
            WorkHourUpdateRequest find = new WorkHourUpdateRequest()
            {
                ID = a[0].wh.ID,
                EmployeesID = a[0].wh.EmployeesID,
                EmployeesName = a[0].emp.FirstName + ' ' + a[0].emp.MiddleName + ' ' + a[0].emp.LastName,
                LBDID = a[0].wh.LBDID,
                namelb = a[0].pp.Name,
                Day = a[0].wh.Day,
                Month = a[0].wh.Month,
                Year = a[0].wh.Year,
                HourCheckin = a[0].wh.HourCheckin,
                MinuteCheckin = a[0].wh.MinuteCheckin,
                HourCheckout = a[0].wh.HourCheckout,
                MinuteCheckout = a[0].wh.MinuteCheckout,
            };
            return find;
        }

        public async Task<int> UpdateAll(WorkHourUpdateRequest request)
        {
            var update = await _context.WorkHours.FindAsync(request.ID);
            update.EmployeesID = request.EmployeesID;
            update.LBDID = request.LBDID;
            update.Day = request.Day;
            update.Month = request.Month;
            update.Year = request.Year;
            update.HourCheckin = request.HourCheckin;
            update.MinuteCheckin = request.MinuteCheckin;
            update.HourCheckout = request.HourCheckout;
            update.MinuteCheckout = request.MinuteCheckout;
            _context.WorkHours.Update(update);
            return await _context.SaveChangesAsync();
        }

        public async Task<PagedResultHome<WorkhourVMHome>> GetAllHome(GetWorkHourAllPage request)
        {
            DateTime now = DateTime.Now;
            var query = from p in _context.WorkHours
                        join pt in _context.Employee on p.EmployeesID equals pt.ID
                        where p.Day == now.Day && p.Month == now.Month && p.Year == now.Year
                        select new { p, pt };

            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.pt.LastName.Contains(request.Keyword) || x.pt.FirstName.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new WorkhourVMHome()
                {
                    Employee = x.pt.ID,
                    Name = x.pt.FirstName + " " + x.pt.MiddleName + " " + x.pt.LastName,
                    HourCheckin = x.p.HourCheckin,
                    MinuteCheckin = x.p.MinuteCheckin,
                    HourCheckout = x.p.HourCheckout,
                    MinuteCheckout = x.p.MinuteCheckout,
                }).ToListAsync();
            int totalem = 0;
            int emplate = 0;
            string a = "";
            double workhour = 0;
            foreach (WorkhourVMHome work in data)
            {
                double totalday = 0;

                if (!work.Employee.Equals(a))
                {
                    totalem++;
                    if (work.HourCheckin > 8 || (work.HourCheckin == 8 && work.MinuteCheckin > 30))
                    {
                        emplate++;
                        totalem--;
                    }

                    a = work.Employee;
                }
                if (work.HourCheckout != 0)
                {
                    totalday = ((work.HourCheckout + ((double)work.MinuteCheckout / 60)) - (work.HourCheckin + ((double)work.MinuteCheckin / 60)));
                }
                workhour += totalday;
            }
            var listem = await _context.Employee.ToListAsync();
            int employoff = listem.Count - totalem - emplate;
            var pagedView = new PagedResultHome<WorkhourVMHome>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                EmployeeOff = employoff,
                EmployyLate = emplate,
                EmployeeWork = totalem,
                Totalworkhour = workhour.ToString("N2"),
                Items = data
            };
            return pagedView;
        }

        public async Task<int> Create(WorkHourCreateRequest request)
        {
            var workhour = new Entity.RelationShips.WorkHour()
            {
                EmployeesID = request.EmployeesID,
                LBDID = request.LBDID,
                Day = request.Day,
                Month = request.Month,
                Year = request.Year,
                HourCheckin = request.HourCheckin,
                MinuteCheckin = request.MinuteCheckin,
                HourCheckout = request.HourCheckout,
                MinuteCheckout = request.MinuteCheckout,
            };
            _context.WorkHours.Add(workhour);
            return await _context.SaveChangesAsync();
        }

        public async Task<List<WorkHourofEmployeeViewModel>> GetByEmployeeId(string id)
        {
            var query = from wh in _context.WorkHours
                        join emp in _context.Employee on wh.EmployeesID equals emp.ID
                        join pp in _context.LabourHours on wh.LBDID equals pp.ID
                        where wh.EmployeesID == id
                        select new { wh, emp, pp };
            var find = await query.Select(x => new WorkHourofEmployeeViewModel()
            {
                ID = x.wh.ID,
                EmployeeID = x.wh.EmployeesID,
                LBD = x.wh.LBDID,
                Day = x.wh.Day,
                Month = x.wh.Month,
                Year = x.wh.Year,
                HourCheckin = x.wh.HourCheckin,
                MinuteCheckin = x.wh.MinuteCheckin,
                HourCheckout = x.wh.HourCheckout,
                MinuteCheckout = x.wh.MinuteCheckout,
            }).ToListAsync();
            return find;
        }
    }
}