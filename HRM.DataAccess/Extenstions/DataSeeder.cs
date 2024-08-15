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

        public List<WorkHour> WorkHourSeedData()
        {
            List<WorkHour> workHoursList = new List<WorkHour>();
            int idWork = 1;

            for (int i = 1; i <= 12; i++)
            {
                int maxDay = (i == 2) ? 28 : (i == 4 || i == 6 || i == 9 || i == 11) ? 30 : 31;
                for (int j = 1; j <= maxDay; j++)
                {
                    for (int z = 1; z <= 5; z++)
                    {
                        
                        Random random = new Random();
                        WorkHour workHour = new WorkHour
                        {
                            ID= idWork,
                            EmployeesID = z.ToString(),
                            LBDID = random.Next(1, 2).ToString(),
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