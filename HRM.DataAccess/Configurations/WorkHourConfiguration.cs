using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRM.Entity.Entities;
using HRM.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Configurations
{
	public class WorkHourConfiguration : IEntityTypeConfiguration<WorkHour>
	{
		public void Configure(EntityTypeBuilder<WorkHour> builder)
		{
			builder.ToTable("Work Hour");
			builder.HasKey(x => x.ID);
		//	builder.HasKey(t => new { t.EmployeesID ,t.LBDID});
			builder.HasOne(t => t.Employess).WithMany(t => t.workHours).HasForeignKey(t => t.EmployeesID);
			builder.HasOne(t => t.Labour).WithMany(t => t.workHours).HasForeignKey(t => t.LBDID);
		}
	}
}
