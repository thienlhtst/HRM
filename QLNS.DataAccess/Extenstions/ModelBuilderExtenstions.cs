using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using QLNS.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Extenstions
{
    public static class ModelBuilderExtenstions
    {
        private static DataSeeder Seeder = new DataSeeder();

        public static void Seed(this ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Allowance>().HasData(
                new Allowance() { ID = "1", Name = "Tiền ăn", Money = 300000 },
                new Allowance() { ID = "2", Name = "Tiền xăng", Money = 500000 }
                );
            modelbuilder.Entity<Employees>().HasData(
                new Employees() { ID = "1", FirstName = "Nguyen", MiddleName = "Jonny", LastName = "Dang", DOB = new DateTime(2004, 05, 01), Sex = Sex.Male, CIC = "000001", NumberPhone = "111", Address = "Texas", SalaryID = "1", Account = "admin", Password = "123456", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "2", FirstName = "Nguyen", MiddleName = "Khoa", LastName = "Pug", DOB = new DateTime(2002, 09, 10), Sex = Sex.Male, CIC = "000002", NumberPhone = "222", Address = "New York", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "3", FirstName = "Nguyen", MiddleName = "Tri", LastName = "Thanh", DOB = new DateTime(2002, 03, 04), Sex = Sex.Male, CIC = "000002", NumberPhone = "222", Address = "Thailand", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "4", FirstName = "Tran", MiddleName = "Minh", LastName = "Thien", DOB = new DateTime(2002, 05, 10), Sex = Sex.Female, CIC = "000002", NumberPhone = "2211232", Address = "New York", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "5", FirstName = "Bui", MiddleName = "Manh", LastName = "Tgabg", DOB = new DateTime(2002, 07, 10), Sex = Sex.Female, CIC = "000002", NumberPhone = "212322", Address = "Dubai", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" }
                );
            modelbuilder.Entity<RankRole>().HasData(
                new RankRole() { ID = "1", Name = "Nhan Vien Binh Thuong" },
                 new RankRole() { ID = "2", Name = "Admin" }
                );

            modelbuilder.Entity<Position>().HasData(
                new Position() { IDposition = "1", Name = "IT" },
                new Position() { IDposition = "2", Name = "Kế toán" },
                new Position() { IDposition = "3", Name = "Marketing" }
                );
            modelbuilder.Entity<Rank>().HasData(
                new Rank() { IDrank = "1", Name = "Nhân viên", RankRoleID = "1" },
                new Rank() { IDrank = "2", Name = "Trưởng phòng", RankRoleID = "2" },
                new Rank() { IDrank = "3", Name = "Phó phòng", RankRoleID = "2" },
                new Rank() { IDrank = "4", Name = "Tổ trưởng", RankRoleID = "2" }
                );
            modelbuilder.Entity<Salary>().HasData(
                new Salary() { ID = "1", PositionID = "1", RankID = "1", Money = 80000 },
                new Salary() { ID = "2", PositionID = "1", RankID = "2", Money = 100000 },
                new Salary() { ID = "3", PositionID = "1", RankID = "3", Money = 70000 },
                new Salary() { ID = "4", PositionID = "1", RankID = "4", Money = 75000 },
                new Salary() { ID = "5", PositionID = "2", RankID = "1", Money = 50000 },
                new Salary() { ID = "6", PositionID = "2", RankID = "2", Money = 110000 },
                new Salary() { ID = "7", PositionID = "2", RankID = "3", Money = 80000 },
                new Salary() { ID = "8", PositionID = "2", RankID = "4", Money = 70000 },
                new Salary() { ID = "9", PositionID = "3", RankID = "1", Money = 60000 },
                new Salary() { ID = "10", PositionID = "3", RankID = "2", Money = 100000 },
                new Salary() { ID = "11", PositionID = "3", RankID = "3", Money = 950000 },
                new Salary() { ID = "12", PositionID = "3", RankID = "4", Money = 700000 }
                );
            modelbuilder.Entity<Day>().HasData(
                new Day() { ID = "1", IDLB = "3", Name = "30/4", Days = 30, Months = 4 },
                new Day() { ID = "2", IDLB = "3", Name = "1/5", Days = 1, Months = 5 },
                new Day() { ID = "3", IDLB = "2", Name = "20/11", Days = 20, Months = 11 },
                new Day() { ID = "4", IDLB = "3", Name = "2/9", Days = 2, Months = 9 },
                new Day() { ID = "5", IDLB = "3", Name = "1/1", Days = 1, Months = 1 }
                );
            modelbuilder.Entity<LabourHour>().HasData(
                new LabourHour() { ID = "1", Name = "Ngày Thường", Factor = 1 },
                new LabourHour() { ID = "2", Name = "Ngày Lễ Nhỏ", Factor = 2 },
                new LabourHour() { ID = "3", Name = "Ngày Lễ ", Factor = 4 }

                );

            /*modelbuilder.Entity<WorkHour>().HasData(
              Seeder.WorkHourSeedData());
            modelbuilder.Entity<EmployeesWithAllowances>().HasData(
                Seeder.EWASeedData());*/
        }
    }
}