using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Configurations
{
	public class RoleConfiguration : IEntityTypeConfiguration<Role>
	{
		public void Configure(EntityTypeBuilder<Role> builder)
		{
			builder.ToTable("Role");
			builder.HasKey(x => x.ID);
			builder.Property(x => x.Name).IsRequired();

		}
	}
}
