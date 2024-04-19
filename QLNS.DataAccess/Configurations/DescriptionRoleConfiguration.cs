using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Configurations
{
	internal class DescriptionRoleConfiguration : IEntityTypeConfiguration<DescriptionRole>
	{
		public void Configure(EntityTypeBuilder<DescriptionRole> builder)
		{
			builder.ToTable("Description Role");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.ID).IsRequired();
			builder.Property(x => x.Name).IsRequired();
			builder.HasOne(x => x.RankRole).WithMany(x => x.Description).HasForeignKey(x => x.ID);

		}
	}
}
