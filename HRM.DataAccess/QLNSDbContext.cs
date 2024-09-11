using Microsoft.EntityFrameworkCore;
using HRM.DataAccess.Configurations;
using HRM.DataAccess.Extenstions;
using HRM.Entity.Entities;
using HRM.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess
{
    public class HRMDbContext : DbContext
    {
        public HRMDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AllowanceConfiguration());
            modelBuilder.ApplyConfiguration(new AllowanceRulesConfiguration());
            modelBuilder.ApplyConfiguration(new DayConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeesConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeWithAllowanceConfiguration());
            modelBuilder.ApplyConfiguration(new LabourContractConfiguration());
            modelBuilder.ApplyConfiguration(new LabourHourConfiguration());
            modelBuilder.ApplyConfiguration(new PositionConfiguration());
            modelBuilder.ApplyConfiguration(new LevelConfiguration());
            modelBuilder.ApplyConfiguration(new SalaryConfiguration());
            modelBuilder.ApplyConfiguration(new WorkHourConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new DescriptionRoleConfiguration());
            modelBuilder.ApplyConfiguration(new SystemManagementConfigruation());
            modelBuilder.Seed();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Allowance> Allowances { get; set; }
        public DbSet<AllowanceRules> AllowanceRules { get; set; }
        public DbSet<Day> Days { get; set; }
        public DbSet<Employees> Employee { get; set; }
        public DbSet<LabourContract> LabourContracts { get; set; }
        public DbSet<LabourHour> LabourHours { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Level> Levels { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<DescriptionRole> DescriptionRoles { get; set; }
        public DbSet<Salary> Salaries { get; set; }

        public DbSet<EmployeesWithAllowances> EmployeesWithAllowances { get; set; }
        public DbSet<WorkHour> WorkHours { get; set; }
        public DbSet<SystemManagement> SystemManagements { get; set; }
    }
}