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
	public class RewardConfiguration : IEntityTypeConfiguration<Rewards>
	{
		public void Configure(EntityTypeBuilder<Rewards> builder)
		{
			builder.ToTable("Reward");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.ID).IsRequired();
			builder.Property(x => x.Content).IsRequired().HasMaxLength(200);
			builder.Property(x => x.Date).IsRequired();
			builder.HasOne(x=>x.Employees).WithMany(x=>x.Rewards).HasForeignKey(x=>x.EmployeeID);
		}
	}
}
