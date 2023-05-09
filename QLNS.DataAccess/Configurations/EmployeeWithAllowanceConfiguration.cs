using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QLNS.Entity.Entities;
using QLNS.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Configurations
{
	public class EmployeeWithAllowanceConfiguration : IEntityTypeConfiguration<EmployeesWithAllowances>
	{
		public void Configure(EntityTypeBuilder<EmployeesWithAllowances> builder)
		{
			builder.ToTable("Employee With Allowance");
			builder.HasKey(e => e.ID);
            builder.Property(e => e.ID).IsRequired().UseIdentityColumn();
            //builder.HasKey(e => new { e.EmployeeID,e.AllowanceID});
            builder.HasOne(t=>t.Employess).WithMany(t=>t.EWA).HasForeignKey(e => e.EmployeeID);
			builder.HasOne(t => t.Allowance).WithMany(t => t.EWA).HasForeignKey(e => e.AllowanceID);
		}
	}
}
