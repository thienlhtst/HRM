using HelpMate.Core.Extensions;
using HRM.Entity.Entities;
using HRM.Entity.Enums;
using HRM.Entity.RelationShips;
using Microsoft.EntityFrameworkCore;

namespace HRM.DataAccess.Extenstions
{
    public static class ModelBuilderExtenstions
    {
        private static DataSeeder Seeder = new DataSeeder();

        public static void Seed(this ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Allowance>().HasData(
                new Allowance() { ID =1, Name = "Tiền ăn", Money = 30000 },
                new Allowance() { ID =2, Name = "Tiền xăng", Money = 20000 }
                );
            modelbuilder.Entity<Employees>().HasData(
                new Employees() { ID = Guid.Parse("1d03f37f-92a4-44d9-9e98-e7302fd15a99"), FirstName = "Nguyen", MiddleName = "Jonny", LastName = "Dang", Email="hrmemail@gmail.com", DOB = new DateTime(2004, 05, 01), Sex = Sex.Male, CIC = "000001", NumberPhone = "111", Address = "Texas", SalaryID = 1, Account = "admin", Password = "123456", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "0e29fbf4-0a48-452a-9482-7f7720695efc".ToGuid(), FirstName = "Nguyen", MiddleName = "Khoa", LastName = "Pug", Email="hrmemail1@gmail.com", DOB = new DateTime(2002, 09, 10), Sex = Sex.Male, CIC = "000002", NumberPhone = "222", Address = "New York", SalaryID = 2, Account = "admin1", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "5dce0a0f-387d-4c77-87bc-989e5d9af48c".ToGuid(), FirstName = "Nguyen", MiddleName = "Tri", LastName = "Thanh", Email="hrmemail2@gmail.com", DOB = new DateTime(2002, 03, 04), Sex = Sex.Male, CIC = "000003", NumberPhone = "222", Address = "Thailand", SalaryID = 4, Account = "admin2", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "e9a7af53-8973-418a-ab30-0147ab4d937b".ToGuid(), FirstName = "Tran", MiddleName = "Minh", LastName = "Thien", Email="hrmemail4@gmail.com", DOB = new DateTime(2002, 05, 10), Sex = Sex.Female, CIC = "000004", NumberPhone = "2211232", Address = "New York", SalaryID = 5, Account = "admin4", Password = "admin", Active = Active.Yes, URLImage = "" },
                new Employees() { ID = "860469dc-0e6a-4bc9-bfce-c520b9d3ab73".ToGuid(), FirstName = "Bui", MiddleName = "Manh", LastName = "Tgabg", Email="hrmemail5@gmail.com", DOB = new DateTime(2002, 07, 10), Sex = Sex.Female, CIC = "000005", NumberPhone = "212322", Address = "Dubai", SalaryID = 6, Account = "admin5", Password = "admin", Active = Active.Yes, URLImage = "" }
                );
            modelbuilder.Entity<Role>().HasData(
                new Role() { ID = 1, Name = "Employee" },
                 new Role() { ID = 2, Name = "Admin" }
                );

            modelbuilder.Entity<Position>().HasData(
                new Position() { ID = 1, Name = "IT" },
                new Position() { ID = 2, Name = "Kế toán" },
                new Position() { ID = 3, Name = "Marketing" }
                );
            modelbuilder.Entity<Level>().HasData(
                new Level() { ID = 1, Name = "Nhân viên", RoleID = 1 },
                new Level() { ID =  2, Name = "Trưởng phòng", RoleID = 2 },
                new Level() { ID = 3, Name = "Phó phòng", RoleID = 2 },
                new Level() { ID = 4, Name = "Tổ trưởng", RoleID = 1 }
                );
            modelbuilder.Entity<Salary>().HasData(
                new Salary() { ID = 1, PositionID = 1, LevelID = 1, Money = 80000 },
                new Salary() { ID = 2, PositionID =1, LevelID = 2, Money = 100000 },
                new Salary() { ID = 3, PositionID = 3, LevelID = 3, Money = 70000 },
                new Salary() { ID = 4, PositionID = 1, LevelID = 4, Money = 75000 },
                new Salary() { ID = 5, PositionID = 2, LevelID = 1, Money = 50000 },
                new Salary() { ID =6, PositionID = 2, LevelID = 2, Money = 110000 },
                new Salary() { ID = 7, PositionID = 2, LevelID = 3, Money = 80000 },
                new Salary() { ID =8, PositionID = 2, LevelID = 4, Money = 70000 },
                new Salary() { ID = 9, PositionID = 3, LevelID = 1, Money = 60000 },
                new Salary() { ID = 10, PositionID = 3, LevelID = 2, Money = 100000 },
                new Salary() { ID = 11, PositionID = 3, LevelID = 3, Money = 95000 },
                new Salary() { ID = 12, PositionID = 3, LevelID = 4, Money = 70000 }
                );
            modelbuilder.Entity<Day>().HasData(
                new Day() { ID = 1, IDLB = 3, Name = "30/4", Days = 30, Months = 4 },
                new Day() { ID = 2, IDLB = 3, Name = "1/5", Days = 1, Months = 5 },
                new Day() { ID = 3, IDLB = 2, Name = "20/11", Days = 20, Months = 11 },
                new Day() { ID = 4, IDLB = 3, Name = "2/9", Days = 2, Months = 9 },
                new Day() { ID = 5, IDLB = 3, Name = "1/1", Days = 1, Months = 1 }
                );
            modelbuilder.Entity<LabourHour>().HasData(
                new LabourHour() { ID = 1, Name = "Ngày Thường", Factor = 1 },
                new LabourHour() { ID = 2, Name = "Ngày Lễ Nhỏ", Factor = 2 },
                new LabourHour() { ID = 3, Name = "Ngày Lễ ", Factor = 4 }

                );

            modelbuilder.Entity<WorkHour>().HasData(
              Seeder.WorkHourSeedData());
            modelbuilder.Entity<SystemManagement>().HasData(
                //login
                new SystemManagement() { ID=1, FunctionID="100000", ParentID=null, Language=null, Layout="login", Name=null, Label=null, Description=null, KindInput=null, Icon=null, Values=null, KindSystem=KindSystem.Layout, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=2, FunctionID="101001", ParentID="100000", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Login", Label="Login", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=3, FunctionID="101001", ParentID="100000", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tieu Đề Đăng Nhập", Label="Đăng Nhập", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=4, FunctionID="101012", ParentID="101002", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Username", Label="UserName", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=5, FunctionID="101012", ParentID="101002", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề tài khoản", Label="Tên tài khoản", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=6, FunctionID="101011", ParentID="101002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="login", Icon=null, Description="UserName:admin", Name="Input Username", Label="UserName:admin", Values="", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=7, FunctionID="101011", ParentID="101002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="login", Icon=null, Description="Tên tài khoản:admin", Name="Nhập tài khoản", Label="Tên tài khoản:admin", Values="", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=8, FunctionID="101013", ParentID="101003", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Password", Label="Password", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=9, FunctionID="101013", ParentID="101003", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề Mặt khẩu", Label="Mặt khẩu", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=10, FunctionID="101014", ParentID="101003", KindSystem=KindSystem.Label, KindInput=KindInput.Password, Layout="login", Icon=null, Description="Password:admin", Language=language.en, Name="Input Password", Label="Password:admin", Values="", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=11, FunctionID="101014", ParentID="101003", KindSystem=KindSystem.Label, KindInput=KindInput.Password, Layout="login", Icon=null, Description="Mặt khẩu:admin", Language=language.vn, Name="Nhập Mặt Khẩu", Label="Mặt khẩu:admin", Values="", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=12, FunctionID="101004", ParentID="100000", KindSystem=KindSystem.Label, Language=language.en, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Title Button", Label="Login", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=13, FunctionID="101004", ParentID="100000", KindSystem=KindSystem.Label, Language=language.vn, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Tiêu đề Button", Label="Đăng Nhập", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=14, FunctionID="101002", ParentID="100000", KindSystem=KindSystem.Group, Language=null, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Group Usersname", Label=null, Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                  new SystemManagement() { ID=15, FunctionID="101003", ParentID="100000", KindSystem=KindSystem.Group, Language=null, Layout="login", Icon=null, Values=null, Description=null, KindInput=null, Name="Group Usersname", Label=null, Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   //login
                   //nav-header
                   new SystemManagement() { ID=16, FunctionID="HA000000", ParentID=null, KindSystem=KindSystem.Group, Language=null, Layout="nav-header-admin", Icon=null, Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label=null, Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=17, FunctionID="HA100001", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.en, Layout="nav-header-admin", Icon="bi bi-people", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Profile", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=18, FunctionID="HA100001", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.vn, Layout="nav-header-admin", Icon="bi bi-people", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Trang Cá Nhân", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=19, FunctionID="HA100002", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.en, Layout="nav-header-admin", Icon="bi bi-gear", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Setting", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=20, FunctionID="HA100002", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.vn, Layout="nav-header-admin", Icon="bi bi-gear", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Cài đặt", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=21, FunctionID="HA100003", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.en, Layout="nav-header-admin", Icon="bi bi-box-arrow-left", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Logout", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=22, FunctionID="HA100003", ParentID="HA000000", KindSystem=KindSystem.Label, Language=language.vn, Layout="nav-header-admin", Icon="bi bi-box-arrow-left", Values=null, Description=null, KindInput=null, Name="Nav header Admin", Label="Đăng Xuất", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   //nav-header

                   //add--employee
                   new SystemManagement() { ID=23, FunctionID="CE000000", ParentID=null, KindSystem=KindSystem.Group, Language=null, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label=null, Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=24, FunctionID="CE000001", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Basic Information", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=25, FunctionID="CE000002", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Job Information", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=26, FunctionID="CE000003", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Account Information", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=27, FunctionID="CE000004", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Image Information", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=28, FunctionID="CE000101", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Last Name", Name="lastName", Label="Last Name", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Last Name should be text", IsImportant=true, },
                   new SystemManagement() { ID=29, FunctionID="CE000102", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Middle Name", Name="middleName", Label="Middle Name", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Middle Name should be text", IsImportant=false, },
                   new SystemManagement() { ID=30, FunctionID="CE000103", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: First Name", Name="firstName", Label="First Name", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Middle Name should be text", IsImportant=true, },
                   new SystemManagement() { ID=31, FunctionID="CE000104", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.DateSelect, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Date of Birth", Name="dob", Label="Date of Birth", Routes =null, ClassName=null, Pattern=null, PatternName="Date of Birth is wrong", IsImportant=true, },
                   new SystemManagement() { ID=32, FunctionID="CE000105", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Gender", Name="sex", Label="Gender", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=33, FunctionID="CE000106", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Identity Card", Name="cic", Label="Identity Card", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=34, FunctionID="CE000107", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Number phone", Name="numberPhone", Label="Number Phone", Routes =null, ClassName=null, Pattern="[0-9]+", PatternName="Number Phone should be number", IsImportant=true, },
                   new SystemManagement() { ID=35, FunctionID="CE000108", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Email, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Email", Name="email", Label="Email", Routes =null, ClassName=null, Pattern="", PatternName="Email is wrong", IsImportant=true, },
                   new SystemManagement() { ID=36, FunctionID="CE000201", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Position", Name="position", Label="Position", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=37, FunctionID="CE000202", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Level", Name="level", Label="Level", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=38, FunctionID="CE000203", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Salary", Name="money", Label="Salary", Routes =null, ClassName=null, Pattern="[0-9]+", PatternName="Salary should be number", IsImportant=true, },
                   new SystemManagement() { ID=39, FunctionID="CE000302", ParentID="CE000003", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Account", Name="account", Label="Account", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=40, FunctionID="CE000302", ParentID="CE000003", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Password", Name="password", Label="Password", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=41, FunctionID="CE000401", ParentID="CE000004", KindSystem=KindSystem.Input, KindInput=KindInput.ImgSelect, Language=language.en, Layout="create-employee", Icon=null, Values=null, Description="Enter: Name Image", Name="urlImage", Label="Name Image", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=true, },
                   new SystemManagement() { ID=42, FunctionID="CE000001", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Thông tin cơ bản", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=43, FunctionID="CE000002", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Thông tin công việc", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=44, FunctionID="CE000003", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Thông tin tài khoản", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=45, FunctionID="CE000004", ParentID="CE000000", KindSystem=KindSystem.Group, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description=null, KindInput=null, Name="Create-employee", Label="Hình ảnh", Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, },
                   new SystemManagement() { ID=46, FunctionID="CE000101", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Họ", Name="lastName", Label="Họ", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=47, FunctionID="CE000102", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Tên Đệm", Name="middleName", Label="Tên Đệm", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Sai Định dạng", IsImportant=false, },
                   new SystemManagement() { ID=48, FunctionID="CE000103", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Tên", Name="firstName", Label="Tên", Routes =null, ClassName=null, Pattern="[a-zA-Z ]+", PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=49, FunctionID="CE000104", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.DateSelect, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Ngày sinh", Name="dob", Label="Ngày sinh", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=50, FunctionID="CE000105", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Giới tính", Name="sex", Label="Giới tính", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=51, FunctionID="CE000106", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Căn cước công dân", Name="cic", Label="Căn cước công dân", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=52, FunctionID="CE000107", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Số điện thoại", Name="numberPhone", Label="Số điện thoại", Routes =null, ClassName=null, Pattern="[0-9]+", PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=53, FunctionID="CE000108", ParentID="CE000001", KindSystem=KindSystem.Input, KindInput=KindInput.Email, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Email", Name="email", Label="Email", Routes =null, ClassName=null, Pattern="", PatternName="Email sai định dạng", IsImportant=true, },
                   new SystemManagement() { ID=54, FunctionID="CE000201", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Vị trí", Name="position", Label="Vị trí", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=55, FunctionID="CE000202", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Select, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Chức vụ", Name="level", Label="Chức vụ", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=56, FunctionID="CE000203", ParentID="CE000002", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Lương", Name="money", Label="Lương", Routes =null, ClassName=null, Pattern="[0-9]+", PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=57, FunctionID="CE000302", ParentID="CE000003", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Tài khoản", Name="account", Label="Tài khoản", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=58, FunctionID="CE000302", ParentID="CE000003", KindSystem=KindSystem.Input, KindInput=KindInput.Text, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Mật khẩu", Name="password", Label="Mật khẩu", Routes =null, ClassName=null, Pattern=null, PatternName="Sai Định dạng", IsImportant=true, },
                   new SystemManagement() { ID=59, FunctionID="CE000401", ParentID="CE000004", KindSystem=KindSystem.Input, KindInput=KindInput.ImgSelect, Language=language.vn, Layout="create-employee", Icon=null, Values=null, Description="Nhập: Name Image", Name="urlImage", Label="Chọn hình ảnh", Routes =null },
                 //add--employee
                 //nav-admin
                 new SystemManagement() { ID=60, FunctionID="NA000000", ParentID=null, KindSystem=KindSystem.Group, Language=null, Layout="nav-admin", Icon=null, Values=null, Description="Nav Admin", KindInput=null, Name="nav-admin", Label=null, Routes =null, ClassName=null, Pattern=null, PatternName=null, IsImportant=null, }

                //nav-admin
                ); ;
            /* modelbuilder.Entity<EmployeesWithAllowances>().HasData(
                 Seeder.EWASeedData());*/
        }
    }
}