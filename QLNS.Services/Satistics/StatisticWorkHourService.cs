using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Entity.RelationShips;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Satistics
{
    public class StatisticWorkHourService : IStatisticWorkHourService
    {
        public readonly QLNSDbContext _context;
        public StatisticWorkHourService(QLNSDbContext context)
        {
            _context = context;
        }

		public async Task<List<WorkhourStatistic>> GetAll(int month,int year)
		{
			var query = from p in _context.WorkHours 
                        where p.Month == month && p.Year == year
                        select p;
			var data = await query.Select(x => new WorkhourStatistic()
			{
				ID = x.ID,
				EmployeeID = x.EmployeesID,
				Day = x.Day,
				Month = x.Month,
				Year = x.Year,
				Workhour = Math.Round(((x.HourCheckout + ((double)x.MinuteCheckout / 60)) - (x.HourCheckin + ((double)x.MinuteCheckin / 60))),2),
			}).ToListAsync();
			foreach (WorkhourStatistic statistic in data)
				if (statistic.Workhour < 0)
					statistic.Workhour = 0;
			return data;

		}

		public async Task<PagedResult<WorkhourStatistic>> GetallPage(GetStatisticAllPage request)
        {
            var query = from p in _context.WorkHours
                        join pt in _context.Employee on p.EmployeesID equals pt.ID
                        where p.Month ==request.Month
                        select new { p, pt };
            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.pt.LastName.Contains(request.Keyword) || x.pt.FirstName.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();
            var data = await query.Skip((request.PageIndex - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new WorkhourStatistic()
                {
                   ID =x.p.ID,
                   EmployeeID =x.p.EmployeesID,
				   Day =x.p.Day,
                   Month =x.p.Month,
                   Year =x.p.Year,
                   Workhour = Math.Round(((x.p.HourCheckout + ((double)x.p.MinuteCheckout / 60)) - (x.p.HourCheckin + ((double)x.p.MinuteCheckin / 60))),2),



        }).ToListAsync();

            foreach(WorkhourStatistic statistic in data)
                if (statistic.Workhour < 0)
                    statistic.Workhour = 0;

            var pagedView = new PagedResult<WorkhourStatistic>()
            {

                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }
    }



}
