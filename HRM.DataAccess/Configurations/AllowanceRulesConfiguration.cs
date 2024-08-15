using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using HRM.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess.Configurations
{
    public class AllowanceRulesConfiguration : IEntityTypeConfiguration<AllowanceRules>
    {
        public void Configure(EntityTypeBuilder<AllowanceRules> builder)
        {
            builder.ToTable("AllowanceRules");
            builder.HasKey(e => new { e.AllowanceID, e.EmployeeID });
            builder.HasOne(x => x.Allowance).WithMany(x => x.Rules).HasForeignKey(x => x.AllowanceID);
            builder.HasOne(x => x.Employee).WithMany(x => x.Rules).HasForeignKey(x => x.EmployeeID);
            builder.Property(x => x.Date).HasMaxLength(20);
        }
    }
}