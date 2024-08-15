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
                new Allowance() { ID = "1", Name = "Tiền ăn", Money = 30000 },
                new Allowance() { ID = "2", Name = "Tiền xăng", Money = 20000 }
                );
            modelbuilder.Entity<Employees>().HasData(
                new Employees() { ID = "1", FirstName = "Nguyen", MiddleName = "Jonny", LastName = "Dang", DOB = new DateTime(2004, 05, 01), Sex = Sex.Male, CIC = "000001", NumberPhone = "111", Address = "Texas", SalaryID = "1", Account = "admin", Password = "123456", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "2", FirstName = "Nguyen", MiddleName = "Khoa", LastName = "Pug", DOB = new DateTime(2002, 09, 10), Sex = Sex.Male, CIC = "000002", NumberPhone = "222", Address = "New York", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "3", FirstName = "Nguyen", MiddleName = "Tri", LastName = "Thanh", DOB = new DateTime(2002, 03, 04), Sex = Sex.Male, CIC = "000003", NumberPhone = "222", Address = "Thailand", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "4", FirstName = "Tran", MiddleName = "Minh", LastName = "Thien", DOB = new DateTime(2002, 05, 10), Sex = Sex.Female, CIC = "000004", NumberPhone = "2211232", Address = "New York", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "5", FirstName = "Bui", MiddleName = "Manh", LastName = "Tgabg", DOB = new DateTime(2002, 07, 10), Sex = Sex.Female, CIC = "000005", NumberPhone = "212322", Address = "Dubai", SalaryID = "2", Account = "admin", Password = "admin", Active = Active.Yes, URLImage = "" }
                );
            modelbuilder.Entity<Role>().HasData(
                new Role() { ID = "1", Name = "Employee" },
                 new Role() { ID = "2", Name = "Admin" }
                );

            modelbuilder.Entity<Position>().HasData(
                new Position() { ID = "1", Name = "IT" },
                new Position() { ID = "2", Name = "Kế toán" },
                new Position() { ID = "3", Name = "Marketing" }
                );
            modelbuilder.Entity<Level>().HasData(
                new Level() { ID = "1", Name = "Nhân viên", RoleID = "1" },
                new Level() { ID = "2", Name = "Trưởng phòng", RoleID = "2" },
                new Level() { ID = "3", Name = "Phó phòng", RoleID = "2" },
                new Level() { ID = "4", Name = "Tổ trưởng", RoleID = "2" }
                );
            modelbuilder.Entity<Salary>().HasData(
                new Salary() { ID = "1", PositionID = "1", LevelID = "1", Money = 80000 },
                new Salary() { ID = "2", PositionID = "1", LevelID = "2", Money = 100000 },
                new Salary() { ID = "3", PositionID = "1", LevelID = "3", Money = 70000 },
                new Salary() { ID = "4", PositionID = "1", LevelID = "4", Money = 75000 },
                new Salary() { ID = "5", PositionID = "2", LevelID = "1", Money = 50000 },
                new Salary() { ID = "6", PositionID = "2", LevelID = "2", Money = 110000 },
                new Salary() { ID = "7", PositionID = "2", LevelID = "3", Money = 80000 },
                new Salary() { ID = "8", PositionID = "2", LevelID = "4", Money = 70000 },
                new Salary() { ID = "9", PositionID = "3", LevelID = "1", Money = 60000 },
                new Salary() { ID = "10", PositionID = "3", LevelID = "2", Money = 100000 },
                new Salary() { ID = "11", PositionID = "3", LevelID = "3", Money = 95000 },
                new Salary() { ID = "12", PositionID = "3", LevelID = "4", Money = 70000 }
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
              Seeder.WorkHourSeedData());
            modelbuilder.Entity<SystemManagement>().HasData(
                new SystemManagement() { ID=1, FunctionID="100000", ParentID=null, Language=null, Layout="login", Name=null, Label=null, Description=null, KindInput=null, Icon=null, Values=null, KindSystem=KindSystem.Layout },
                  new SystemManagement() { ID=2, FunctionID="101001", ParentID="100000", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Login", Label="Login" },
                  new SystemManagement() { ID=3, FunctionID="101001", ParentID="100000", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tieu Đề Đăng Nhập", Label="Đăng Nhập" },
                  new SystemManagement() { ID=4, FunctionID="101012", ParentID="101002", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Username", Label="UserName" },
                  new SystemManagement() { ID=5, FunctionID="101012", ParentID="101002", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề tài khoản", Label="Tên tài khoản" },
                  new SystemManagement() { ID=6, FunctionID="101011", ParentID="101002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="login", Icon=null, Description=null, Name="Input Username", Label="UserName:admin", Values="" },
                  new SystemManagement() { ID=7, FunctionID="101011", ParentID="101002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="login", Icon=null, Description=null, Name="Nhập tài khoản", Label="Tên tài khoản:admin", Values="" },
                  new SystemManagement() { ID=8, FunctionID="101013", ParentID="101003", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Password", Label="Password" },
                  new SystemManagement() { ID=9, FunctionID="101013", ParentID="101003", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề Mặt khẩu", Label="Mặt khẩu" },
                  new SystemManagement() { ID=10, FunctionID="101014", ParentID="101003", KindSystem=KindSystem.Label, KindInput=KindInput.Password, Layout="login", Icon=null, Description=null, Language=language.en, Name="Input Password", Label="Password:admin", Values="" },
                  new SystemManagement() { ID=11, FunctionID="101014", ParentID="101003", KindSystem=KindSystem.Label, KindInput=KindInput.Password, Layout="login", Icon=null, Description=null, Language=language.vn, Name="Nhập Mặt Khẩu", Label="Mặt khẩu:admin", Values="" },
                  new SystemManagement() { ID=12, FunctionID="101004", ParentID="100000", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Button", Label="Login" },
                  new SystemManagement() { ID=13, FunctionID="101004", ParentID="100000", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề Button", Label="Đăng Nhập" },
                  new SystemManagement() { ID=14, FunctionID="101002", ParentID="100000", KindSystem=KindSystem.Group, Language=null, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Group Usersname", Label=null },
                  new SystemManagement() { ID=15, FunctionID="101003", ParentID="100000", KindSystem=KindSystem.Group, Language=null, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Group Usersname", Label=null }

                ); ;
            /* modelbuilder.Entity<EmployeesWithAllowances>().HasData(
                 Seeder.EWASeedData());*/
        }
    }
}