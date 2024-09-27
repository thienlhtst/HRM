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
    public class AllowanceConfiguration : IEntityTypeConfiguration<Allowance>
	{   
        public void Configure(EntityTypeBuilder<Allowance> builder)
        {
            builder.ToTable("Allowance");
            builder.HasKey(x => x.ID);
			builder.Property(x => x.ID).IsRequired();
            builder.Property(x=>x.Name).HasMaxLength(20);
            builder.Property(x => x.Money).HasMaxLength(20);
        }
    }
}
