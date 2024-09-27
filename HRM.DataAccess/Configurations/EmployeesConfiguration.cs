using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Entities;
using HRM.Entity.Enums;
using Microsoft.EntityFrameworkCore;

namespace HRM.DataAccess.Configurations
{
    public class EmployeesConfiguration : IEntityTypeConfiguration<Employees>
    {
        public void Configure(EntityTypeBuilder<Employees> builder)
        {
            builder.ToTable("Employees");
            builder.HasKey(x => x.ID);
            builder.Property(x => x.ID).IsRequired();
            builder.Property(x => x.FirstName).HasMaxLength(20);
            builder.Property(x => x.MiddleName).HasMaxLength(20);
            builder.Property(x => x.LastName).HasMaxLength(20);
            builder.Property(x => x.DOB).HasDefaultValue(DateTime.Now);
            builder.Property(x => x.Sex).HasDefaultValue(Sex.Male);
            builder.Property(x => x.CIC).HasMaxLength(20);
            builder.Property(x => x.Email).HasMaxLength(20);
            builder.Property(x => x.Address).HasMaxLength(20);
            builder.HasOne(x => x.Salary).WithMany(x => x.Employees).HasForeignKey(x => x.SalaryID);
            builder.Property(x => x.Account).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Password).IsRequired().HasMaxLength(100);
            builder.Property(x => x.Active).HasDefaultValue(Active.Yes);
            builder.Property(x => x.URLImage).HasMaxLength(200).IsRequired(true);
            builder.HasIndex(x => new { x.CIC, x.Account, x.Email }).IsUnique();
        }
    }
}