using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Entity.Entities;
using Microsoft.EntityFrameworkCore;

namespace HRM.DataAccess.Configurations
{
    public class LevelConfiguration : IEntityTypeConfiguration<Level>
	{
        public void Configure(EntityTypeBuilder<Level> builder)
        {
            builder.ToTable("Level");
            builder.HasKey(x => x.ID);
            builder.Property(x => x.ID).IsRequired();
            builder.Property(x => x.Name).HasMaxLength(20);
			builder.HasOne(x => x.Roles).WithMany(x => x.Level).HasForeignKey(x => x.RoleID);
		}
    }
}