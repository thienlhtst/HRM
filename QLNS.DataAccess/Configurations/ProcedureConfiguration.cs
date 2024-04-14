using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Configurations
{
    public class ProcedureConfiguration : IEntityTypeConfiguration<Procedure>
    {
        public void Configure(EntityTypeBuilder<Procedure> builder)
        {
            builder.ToTable("Procedure");
            builder.HasKey(x=>x.ID);
            builder.Property(x=>x.ID).IsRequired().HasMaxLength(20);
            builder.Property(x=>x.Name).IsRequired().HasMaxLength(20);
            builder.Property(x=>x.Description).IsRequired().HasMaxLength(100);
        }
    }
}
