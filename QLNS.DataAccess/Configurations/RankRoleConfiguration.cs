using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Configurations
{
	public class RankRoleConfiguration : IEntityTypeConfiguration<RankRole>
	{
		public void Configure(EntityTypeBuilder<RankRole> builder)
		{
			builder.ToTable("Rank Role");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.Name).IsRequired();

		}
	}
}
