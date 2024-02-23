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
        public static void Seed(this ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Allowance>().HasData(
                new Allowance() { ID = "1", Name = "Tiền ăn", Money = 300000 },
                new Allowance() { ID = "2", Name = "Tiền xăng", Money = 500000 }
                );
            modelbuilder.Entity<Employees>().HasData(
                new Employees() { ID = "1", FirstName = "Nguyen", MiddleName = "Jonny", LastName = "Dang", DOB = new DateTime(2004, 05, 01), Sex = Sex.Male, CIC = "000001", NumberPhone = "111", Address = "Texas", SalaryID = "1", Account = "admin", Password = "123456", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "2", FirstName = "Nguyen", MiddleName = "Khoa", LastName = "Pug", DOB = new DateTime(2002, 09, 10), Sex = Sex.Male, CIC = "000002", NumberPhone = "222", Address = "New York", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" }
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
                new Salary() { ID = "1", PositionID = "1", RankID = "1", Money = 10000000 },
                new Salary() { ID = "2", PositionID = "1", RankID = "2", Money = 20000000 },
                new Salary() { ID = "3", PositionID = "1", RankID = "3", Money = 17000000 },
                new Salary() { ID = "4", PositionID = "1", RankID = "4", Money = 15000000 },
                new Salary() { ID = "5", PositionID = "2", RankID = "1", Money = 10000000 },
                new Salary() { ID = "6", PositionID = "2", RankID = "2", Money = 20000000 },
                new Salary() { ID = "7", PositionID = "2", RankID = "3", Money = 17000000 },
                new Salary() { ID = "8", PositionID = "2", RankID = "4", Money = 15000000 },
                new Salary() { ID = "9", PositionID = "3", RankID = "1", Money = 10000000 },
                new Salary() { ID = "10", PositionID = "3", RankID = "2", Money = 20000000 },
                new Salary() { ID = "11", PositionID = "3", RankID = "3", Money = 17000000 },
                new Salary() { ID = "12", PositionID = "3", RankID = "4", Money = 15000000 }
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

            modelbuilder.Entity<WorkHour>().HasData(
                new WorkHour() { ID = 1, EmployeesID = "1", LBDID = "1", Day = 1, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 2, EmployeesID = "1", LBDID = "1", Day = 2, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 3, EmployeesID = "1", LBDID = "1", Day = 3, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 4, EmployeesID = "1", LBDID = "1", Day = 4, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 5, EmployeesID = "1", LBDID = "1", Day = 5, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 6, EmployeesID = "1", LBDID = "1", Day = 6, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 7, EmployeesID = "1", LBDID = "1", Day = 7, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 8, EmployeesID = "1", LBDID = "1", Day = 8, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 9, EmployeesID = "1", LBDID = "1", Day = 9, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 10, EmployeesID = "2", LBDID = "1", Day = 1, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 11, EmployeesID = "2", LBDID = "1", Day = 2, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 12, EmployeesID = "2", LBDID = "1", Day = 3, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 13, EmployeesID = "2", LBDID = "1", Day = 4, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 14, EmployeesID = "2", LBDID = "1", Day = 5, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 15, EmployeesID = "2", LBDID = "1", Day = 6, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 16, EmployeesID = "2", LBDID = "1", Day = 7, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 17, EmployeesID = "2", LBDID = "1", Day = 8, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 18, EmployeesID = "2", LBDID = "1", Day = 9, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 19, EmployeesID = "2", LBDID = "1", Day = 10, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 20, EmployeesID = "2", LBDID = "1", Day = 11, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 21, EmployeesID = "2", LBDID = "1", Day = 12, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 },
                new WorkHour() { ID = 22, EmployeesID = "2", LBDID = "1", Day = 13, Month = 4, Year = 2023, HourCheckin = 7, MinuteCheckin = 0, HourCheckout = 16, MinuteCheckout = 0 }
            );
        }
    }
}