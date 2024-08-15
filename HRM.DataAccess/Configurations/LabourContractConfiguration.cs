using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRM.Entity.Entities;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Configurations
{
	public class LabourContractConfiguration : IEntityTypeConfiguration<LabourContract>
	{
		public void Configure(EntityTypeBuilder<LabourContract> builder)
		{
			builder.ToTable("Labour Contract");
			builder.HasKey(x => x.ID);
			builder.Property(x=>x.ID).IsRequired();
			builder.Property(x => x.Active).HasDefaultValue(Active.Yes).IsRequired();
			builder.Property(x => x.ContractTerm).IsRequired();
			builder.Property(x => x.Content).IsRequired().HasMaxLength(200);
			builder.Property(x => x.ContractSigninDate).IsRequired();
			builder.HasOne(h => h.Employess).WithMany(w => w.LabourContracts).HasForeignKey(k => k.EmployeeID);
		}
	}
}
