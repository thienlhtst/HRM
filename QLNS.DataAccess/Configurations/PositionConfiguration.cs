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
	internal class PositionConfiguration : IEntityTypeConfiguration<Position>
	{
		public void Configure(EntityTypeBuilder<Position> builder)
		{
			builder.ToTable("Position");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.ID).IsRequired();
			builder.Property(x => x.Name).IsRequired().HasMaxLength(50);
			
		}
	}
}
