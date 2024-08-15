using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Configurations
{
    public class DetailSalaryConfiguration : IEntityTypeConfiguration<DetailSalary>
    {
        public void Configure(EntityTypeBuilder<DetailSalary> builder)
        {
            builder.ToTable("Detail Salary");
            builder.HasKey(x=>x.ID);
            builder.Property(x => x.ID).IsRequired().HasMaxLength(20);
            builder.HasOne(x => x.Salary).WithMany(x => x.DetailSalary).HasForeignKey(x => x.IDSalary);
            builder.Property(x=>x.BonusSalary).HasMaxLength(20);
        }
    }
}
