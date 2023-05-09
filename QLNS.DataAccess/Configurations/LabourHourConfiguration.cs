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
	public class LabourHourConfiguration : IEntityTypeConfiguration<LabourHour>
	{
		public void Configure(EntityTypeBuilder<LabourHour> builder)
		{
			builder.ToTable("Labour Hour");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.ID).IsRequired();
			builder.Property(x => x.Factor).IsRequired();
			
		}
	}
}
