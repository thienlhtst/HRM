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
	public class DayConfiguration : IEntityTypeConfiguration<Day>
	{
		public void Configure(EntityTypeBuilder<Day> builder)
		{
			builder.ToTable("DayOfHoliday");
			builder.HasKey(x => x.ID);
			builder.Property(x=>x.ID).IsRequired();
			builder.Property(x => x.Name).IsRequired().HasMaxLength(50);
			builder.HasOne(x => x.LabourHour).WithMany(x => x.Days).HasForeignKey(x => x.IDLB);
		}
	}
}
