using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QLNS.Entity.Entities;
using Microsoft.EntityFrameworkCore;

namespace QLNS.DataAccess.Configurations
{
    public class RankConguration : IEntityTypeConfiguration<Rank>
	{
        public void Configure(EntityTypeBuilder<Rank> builder)
        {
            builder.ToTable("Rank");
            builder.HasKey(x => x.IDrank);
            builder.Property(x => x.IDrank).IsRequired();
            builder.Property(x => x.Name).HasMaxLength(20);
			builder.HasOne(x => x.Roles).WithMany(x => x.Rank).HasForeignKey(x => x.RankRoleID);
		}
    }
}