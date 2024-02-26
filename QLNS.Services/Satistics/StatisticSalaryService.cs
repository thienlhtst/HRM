using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using QLNS.DataAccess;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace QLNS.Services.Satistics
{
    public class StatisticSalaryService : IStatisticSalaryService
    {
        public readonly QLNSDbContext _context;
        private readonly DatetimeInDate _date;

        public StatisticSalaryService(QLNSDbContext context)
        {
            _context = context;
            _date = new DatetimeInDate();
        }

        public async Task<PagedResult<SalaryListStatistic>> GetAllPage(GetStatisticAllPage request)
        {
            var query_employee = from emp in _context.Employee
                                 join sal in _context.Salaries on emp.SalaryID equals sal.ID
                                 select new
                                 {
                                     ID = emp.ID,
                                     Name = emp.FirstName + " " + emp.LastName,
                                     Salary = sal.Money,
                                 };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query_employee = query_employee.Where(x => x.Name.Contains(request.Keyword) || x.ID.Contains(request.Keyword));
            }
            int totalRow = await query_employee.CountAsync();
            var data = await query_employee.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new SalaryListStatistic
                {
                    ID = x.ID,
                    Name = x.Name,
                    BasicSalary = x.Salary
                }).ToListAsync();
            foreach (var item in data)
            {
                var query_workhour = await (from wh in _context.WorkHours
                                            join lb in _context.LabourHours on wh.LBDID equals lb.ID
                                            where wh.EmployeesID.Equals(item.ID)  && wh.Month.Equals(request.Month) && wh.Year.Equals(request.Year)
                                            select new
                                            {
                                                wh,
                                                lb
                                            }).ToListAsync();
                item.Workhour = 0;
                item.TotalAlowance=0;
                if (query_workhour != null)
                    item.Workhour = query_workhour.Sum(x => Math.Round(((x.wh.HourCheckout + ((double)x.wh.MinuteCheckout / 60)) - (x.wh.HourCheckin + ((double)x.wh.MinuteCheckin / 60)))*x.lb.Factor, 2));

                var query_alowance = await (from eaw in _context.EmployeesWithAllowances
                                            join allw in _context.Allowances on eaw.AllowanceID equals allw.ID
                                            where eaw.EmployeeID.Equals(item.ID) && eaw.Date.Month.Equals(request.Month) && eaw.Date.Year.Equals(request.Year)
                                            select allw).ToListAsync();
                if (query_alowance !=null)
                    item.TotalAlowance = query_alowance.Sum(x => x.Money);
                item.Salary = ((double)item.BasicSalary * item.Workhour) +item.TotalAlowance;
            }
            var pagedView = new PagedResult<SalaryListStatistic>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<SalaryToEmployeeInYear> SalaryInYear(int year)
        {
            var query_employee = from emp in _context.Employee
                                 join sal in _context.Salaries on emp.SalaryID equals sal.ID
                                 select new
                                 {
                                     ID = emp.ID,
                                     Salary = sal.Money,
                                 };
            SalaryToEmployeeInYear result = new SalaryToEmployeeInYear
            {
                total = 0,
                monthlyinyear = new double[12]
            };
            for (int i = 0; i < 12; i++)
            {
                double total_sumsalary = 0;
                foreach (var item in query_employee)
                {
                    var query_workhour = await (from wh in _context.WorkHours
                                                join lb in _context.LabourHours on wh.LBDID equals lb.ID
                                                where wh.EmployeesID.Equals(item.ID)  && wh.Month.Equals(i + 1) && wh.Year.Equals(year)
                                                select new
                                                {
                                                    wh,
                                                    lb
                                                }
                                                ).ToListAsync();

                    double sum_workhour = 0;
                    if (query_workhour != null)
                        sum_workhour = query_workhour.Sum(x => Math.Round(((x.wh.HourCheckout + ((double)x.wh.MinuteCheckout / 60)) - (x.wh.HourCheckin + ((double)x.wh.MinuteCheckin / 60)))*x.lb.Factor, 2));
                    double sumsalary = (double)item.Salary * sum_workhour;
                    double TotalAllowance = 0;
                    var query_alowance = await (from eaw in _context.EmployeesWithAllowances
                                                join allw in _context.Allowances on eaw.AllowanceID equals allw.ID
                                                where eaw.EmployeeID.Equals(item.ID) && eaw.Date.Month.Equals(i + 1) && eaw.Date.Year.Equals(year)
                                                select allw).ToListAsync();
                    if (query_alowance !=null)
                        TotalAllowance = query_alowance.Sum(x => x.Money);
                    total_sumsalary += sumsalary+TotalAllowance;
                }
                if (total_sumsalary < 1000000 && total_sumsalary > 10000)
                    result.monthlyinyear[i] = total_sumsalary;
                else
                    result.monthlyinyear[i] = Math.Round(total_sumsalary / 1000000, 2);
            }
            result.total = result.monthlyinyear.Sum();
            return result;
        }

        public async Task<List<TopSalary>> TopSalary(int top)
        {
            var query_salary = await (from sal in _context.Salaries
                                      join rank in _context.Ranks on sal.RankID equals rank.IDrank
                                      join pos in _context.Positions on sal.PositionID equals pos.IDposition
                                      select new TopSalary
                                      {
                                          ID = sal.ID,
                                          PositionName = pos.Name,
                                          RankName = rank.Name,
                                          Salary = (double)sal.Money
                                      }).ToListAsync();
            var result = query_salary.OrderByDescending(x => x.Salary).Take(top).ToList();
            return result;
        }
    }
}