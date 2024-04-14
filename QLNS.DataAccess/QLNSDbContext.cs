using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess.Configurations;
using QLNS.DataAccess.Extenstions;
using QLNS.Entity.Entities;
using QLNS.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess
{
    public class QLNSDbContext : DbContext
    {
        public QLNSDbContext(DbContextOptions options) : base(options)
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
            modelBuilder.ApplyConfiguration(new RankConguration());
            modelBuilder.ApplyConfiguration(new RewardConfiguration());
            modelBuilder.ApplyConfiguration(new SalaryConfiguration());
            modelBuilder.ApplyConfiguration(new WorkHourConfiguration());
            modelBuilder.ApplyConfiguration(new RankRoleConfiguration());
            modelBuilder.ApplyConfiguration(new DescriptionRoleConfiguration());
            modelBuilder.ApplyConfiguration(new ProcedureConfiguration());
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
        public DbSet<Rank> Ranks { get; set; }
        public DbSet<RankRole> RankRoles { get; set; }
        public DbSet<DescriptionRole> DescriptionRoles { get; set; }
        public DbSet<Rewards> Rewards { get; set; }
        public DbSet<Salary> Salaries { get; set; }
        public DbSet<EmployeesWithAllowances> EmployeesWithAllowances { get; set; }
        public DbSet<WorkHour> WorkHours { get; set; }

        public DbSet<Procedure> Procedures { get; set; }
    }
}