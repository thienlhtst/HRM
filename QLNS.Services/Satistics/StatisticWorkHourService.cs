using Azure.Core;
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
using System.Security.AccessControl;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace QLNS.Services.Satistics
{
    public class StatisticWorkHourService : IStatisticWorkHourService
    {
        public readonly QLNSDbContext _context;
        private readonly DatetimeInDate _date;

        public StatisticWorkHourService(QLNSDbContext context)
        {
            _context = context;
            _date= new DatetimeInDate();
        }

        public async Task<List<WorkhourStatistic>> GetAll(int month, int year)
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
                Workhour = Math.Round(((x.HourCheckout + ((double)x.MinuteCheckout / 60)) - (x.HourCheckin + ((double)x.MinuteCheckin / 60))), 2),
            }).ToListAsync();
            foreach (WorkhourStatistic statistic in data)
                if (statistic.Workhour < 0)
                    statistic.Workhour = 0;
            return data;
        }

        public async Task<List<WorkhourStatistic>> GetallPage(int month, int year)
        {
            var query = from p in _context.WorkHours
                        join pt in _context.Employee on p.EmployeesID equals pt.ID
                        where p.Month ==month && p.Year ==year
                        select new { p, pt };

            var data = await query
                .Select(x => new WorkhourStatistic()
                {
                    ID =x.p.ID,
                    EmployeeID =x.p.EmployeesID,
                    Day =x.p.Day,
                    Month =x.p.Month,
                    Year =x.p.Year,
                    Workhour = Math.Round(((x.p.HourCheckout + ((double)x.p.MinuteCheckout / 60)) - (x.p.HourCheckin + ((double)x.p.MinuteCheckin / 60))), 2),
                }).ToListAsync();

            foreach (WorkhourStatistic statistic in data)
                if (statistic.Workhour < 0)
                    statistic.Workhour = 0;
            return data;
        }

        public async Task<List<double[]>> GetAllWeeksinMonth(int month, int year)
        {
            // var query = await _context.WorkHours.Where(x => x.Month == month &&x.Year==year).ToListAsync();
            var query = from p in _context.WorkHours
                        where p.Year == year
                        select p;
            var query1 = await query.ToListAsync();
            List<double[]> listOfArrays = new List<double[]>();
            for (int i = 1; i<=_date.GetNumberOfWeeksInMonth(year, month); i++)
            {
                WeekDays weekDays = _date.DisplayWeekDays(year, month, i);
                double[] ArraysOfweek = new double[7];

                for (int j = 1; j<=7; j++)
                {
                    double result = _date.SumOfWorkhourInWeek(weekDays.firstDayOfWeek, query1);
                    ArraysOfweek[j-1] = result;
                    weekDays.firstDayOfWeek=weekDays.firstDayOfWeek.AddDays(1);
                }
                listOfArrays.Add(ArraysOfweek);
            }

            return listOfArrays;
        }

        public async Task<double[]> GetAllMonthinYear(int year)
        {
            double[] ArraysOfmonth = new double[12];

            for (int i = 0; i<12; i++)
            {
                double sum = 0;
                var query1 = _context.WorkHours.Where(x => x.Month ==i+1 && x.Year ==year);
                if (query1!=null)
                    sum = query1.Sum(x => Math.Round(((x.HourCheckout + ((double)x.MinuteCheckout / 60)) - (x.HourCheckin + ((double)x.MinuteCheckin / 60))), 2));
                ArraysOfmonth[i] = sum;
            }

            return ArraysOfmonth;
        }

        public async Task<EmployeeWork> GetemployeesinWeek(string datestring)
        {
            EmployeeWork model = new EmployeeWork();
            DateTime date = DateTime.Parse(datestring);
            int weekofmonth = _date.GetWeekOfMonth(date);
            WeekDays weekDays = _date.DisplayWeekDays(date.Year, date.Month, weekofmonth);
            var employee = await _context.Employee.ToListAsync();
            var query = await _context.WorkHours.Where(x => x.Year==date.Year).ToListAsync();
            model = _date.EmployeeinWeek(weekDays.firstDayOfWeek, employee, query);
            return model;
        }
    }
}