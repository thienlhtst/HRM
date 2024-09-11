using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bogus;
using NUnit.Framework.Internal;
using HRM.Entity.Enums;
using HRM.Entity.RelationShips;

namespace HRM.DataAccess.Extenstions
{
    public class DataSeeder
    {
        private Faker<WorkHour> WorkHourFake;

        private Faker<EmployeesWithAllowances> EWAFake;
        private List<EmployeesWithAllowances> EWAList = new List<EmployeesWithAllowances>();

        private int idEWA = 1;

        private List<Guid> list = new List<Guid> {
                Guid.Parse("1d03f37f-92a4-44d9-9e98-e7302fd15a99"),
                Guid.Parse("0e29fbf4-0a48-452a-9482-7f7720695efc"),
                Guid.Parse("5dce0a0f-387d-4c77-87bc-989e5d9af48c"),
                Guid.Parse("e9a7af53-8973-418a-ab30-0147ab4d937b"),
                Guid.Parse("860469dc-0e6a-4bc9-bfce-c520b9d3ab73"),
            };

        public List<WorkHour> WorkHourSeedData()
        {
            List<WorkHour> workHoursList = new List<WorkHour>();
            int idWork = 1;

            for (int i = 1; i <= 12; i++)
            {
                int maxDay = (i == 2) ? 28 : (i == 4 || i == 6 || i == 9 || i == 11) ? 30 : 31;
                for (int j = 1; j <= maxDay; j++)
                {
                    foreach (var item in list)
                    {
                        Random random = new Random();
                        WorkHour workHour = new WorkHour
                        {
                            ID= idWork,
                            EmployeesID = item,
                            LBDID = random.Next(1, 2),
                            Day=j,
                            Month=i,
                            Year=2023,
                            HourCheckin=8,
                            MinuteCheckin=random.Next(0, 40),
                            HourCheckout= random.Next(17, 18),
                            MinuteCheckout=random.Next(0, 30),
                        };
                        idWork+=1;
                        workHoursList.Add(workHour);
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
                    foreach (var item in list)
                    {
                        DateTime startDate = new DateTime(2023, i, j);
                        EWAFake = new Faker<EmployeesWithAllowances>()
                            .RuleFor(u => u.ID, f => idEWA++)
                            .RuleFor(u => u.EmployeeID, f => item)
                            .RuleFor(u => u.AllowanceID, f => f.Random.Int(min: 1, max: 2))
                            .RuleFor(u => u.Date, f => startDate);

                        EWAList.Add(EWAFake);
                    }
                }
            }
            return EWAList;
        }
    }
}