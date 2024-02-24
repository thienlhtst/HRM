using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bogus;
using NUnit.Framework.Internal;
using QLNS.Entity.Enums;
using QLNS.Entity.RelationShips;

namespace QLNS.DataAccess.Extenstions
{
    public class DataSeeder
    {
        private Faker<WorkHour> WorkHourFake;
        private List<WorkHour> workHoursList = new List<WorkHour>();
        private Faker<EmployeesWithAllowances> EWAFake;
        private List<EmployeesWithAllowances> EWAList = new List<EmployeesWithAllowances>();

        private int idWork = 1; // T đã đưa thử 2 thằng id này vào hàm nhưng khi đưa vào nó lại bị lỗi trùng ID
        private int idEWA = 1;

        public List<WorkHour> WorkHourSeedData()
        {
            // T đã cố gắng đưa idWork vào đây
            for (int i = 1; i <= 12; i++)
            {
                int maxDay = (i == 2) ? 28 : (i == 4 || i == 6 || i == 9 || i == 11) ? 30 : 31;
                for (int j = 1; j <= maxDay; j++)
                {
                    for (int z = 1; z <= 5; z++)
                    {
                        WorkHourFake = new Faker<WorkHour>()
                        .RuleFor(u => u.ID, f => idWork++)
                        .RuleFor(u => u.EmployeesID, f => z.ToString())
                        .RuleFor(u => u.LBDID, f => f.Random.Int(min: 1, max: 2).ToString())
                        .RuleFor(u => u.Day, f => j)
                        .RuleFor(u => u.Month, f => i)
                        .RuleFor(u => u.Year, f => 2023)
                        .RuleFor(u => u.HourCheckin, f => 8)
                        .RuleFor(u => u.MinuteCheckin, f => 30)
                        .RuleFor(u => u.HourCheckout, f => f.Random.Int(min: 17, max: 18))
                        .RuleFor(u => u.MinuteCheckout, (f, u) =>
                        {
                            if (u.HourCheckout == 17)
                                return 00;
                            else
                                return 30;
                        });
                        workHoursList.Add(WorkHourFake);
                    }
                }
            }

            return workHoursList;
        }

        public List<EmployeesWithAllowances> EWASeedData()
        {
            // và idEWA vào đây
            for (int i = 1; i <= 12; i++)
            {
                int maxDay = (i == 2) ? 28 : (i == 4 || i == 6 || i == 9 || i == 11) ? 30 : 31;
                for (int j = 1; j <= maxDay; j++)
                {
                    for (int z = 1; z <= 5; z++)
                    {
                        DateTime startDate = new DateTime(2023, i, j);
                        EWAFake = new Faker<EmployeesWithAllowances>()
                            .RuleFor(u => u.ID, f => idEWA++)
                            .RuleFor(u => u.EmployeeID, f => z.ToString())
                            .RuleFor(u => u.AllowanceID, f => f.Random.Int(min: 1, max: 2).ToString())
                            .RuleFor(u => u.Date, f => startDate);

                        EWAList.Add(EWAFake);
                    }
                }
            }
            return EWAList;
        }
    }
}