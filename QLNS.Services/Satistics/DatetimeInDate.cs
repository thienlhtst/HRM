using QLNS.Entity.Entities;
using QLNS.Entity.RelationShips;
using QLNS.ViewModel.Catalogs.Satictis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Satistics
{
    public class DatetimeInDate
    {
        public int GetNumberOfWeeksInMonth(int year, int month)
        {
            DateTime firstDayOfMonth = new DateTime(year, month, 1);
            DateTime lastDayOfMonth = firstDayOfMonth.AddMonths(1).AddDays(-1);
            int totalDays = (int)(lastDayOfMonth - firstDayOfMonth).TotalDays + 1;
            int numberOfWeeks = (int)Math.Ceiling((double)(totalDays + (int)firstDayOfMonth.DayOfWeek) / 7);
            return numberOfWeeks;
        }

        public WeekDays DisplayWeekDays(int year, int month, int weekNumber)
        {
            DateTime firstDayOfMonth = new DateTime(year, month, 1);
            DateTime firstDayOfWeek = firstDayOfMonth.AddDays((weekNumber - 1) * 7 - (int)firstDayOfMonth.DayOfWeek);
            DateTime lastDayOfWeek = firstDayOfWeek.AddDays(6);
            WeekDays weekDays = new WeekDays
            {
                firstDayOfWeek = firstDayOfWeek,
                lastDayOfWeek = lastDayOfWeek
            };
            return weekDays;
        }

        public int GetWeekOfMonth(DateTime date)
        {
            DateTime firstDayOfMonth = new DateTime(date.Year, date.Month, 1);
            int dayOfWeek = (int)firstDayOfMonth.DayOfWeek; // 0 (Sunday) to 6 (Saturday)
            int adjustedDate = date.Day + dayOfWeek - 1;
            return (int)Math.Ceiling(adjustedDate / 7.0);
        }

        public double SumOfWorkhourInWeek(DateTime request, List<WorkHour> query)
        {
            double sum = 0;
            var query1 = query.Where(x => x.Day == request.Day && x.Month ==request.Month && x.Year ==request.Year);
            if (query!=null)
                sum = query1.Sum(x => Math.Round(((x.HourCheckout + ((double)x.MinuteCheckout / 60)) - (x.HourCheckin + ((double)x.MinuteCheckin / 60))), 2));
            return sum;
        }

        public EmployeeWork EmployeeinWeek(DateTime request, List<Employees> employee, List<WorkHour> query)
        {
            EmployeeWork model = new EmployeeWork();

            for (int i = 0; i<=6; i++)
            {
                var query1 = query.Where(x => x.Day == request.Day+i && x.Month ==request.Month && x.Year ==request.Year);
                foreach (Employees employeeitems in employee)
                {
                    if (query1.Any(x => x.EmployeesID ==employeeitems.ID)==true)
                        model.employeeWork[i]+=1;
                    else
                        model.employeeOff[i]+=1;
                }
                model.Day[i] = request.AddDays(i);
            }
            return model;
        }
    }

    public class WeekDays
    {
        public DateTime firstDayOfWeek { get; set; }
        public DateTime lastDayOfWeek { get; set; }
    }
}