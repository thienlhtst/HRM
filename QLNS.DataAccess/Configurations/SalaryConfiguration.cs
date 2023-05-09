using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.Entity.Entities;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace QLNS.DataAccess.Configurations
{
    public class SalaryConfiguration : IEntityTypeConfiguration<Salary>

	{
        public void Configure(EntityTypeBuilder<Salary> builder)
        {
            builder.ToTable("Salary");
            builder.HasKey(x => x.ID);
            builder.Property(x => x.ID).IsRequired();
            builder.HasOne(x=>x.Rank).WithMany(x => x.Salaries).HasForeignKey(x => x.RankID);
            builder.HasOne(x => x.Position).WithMany(x => x.Salaries).HasForeignKey(x => x.PositionID);
            builder.Property(x => x.Money).HasMaxLength(20);
        }
    }
}
