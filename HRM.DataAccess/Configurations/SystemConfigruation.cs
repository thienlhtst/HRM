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
    public class SystemManagementConfigruation : IEntityTypeConfiguration<SystemManagement>
    {
        public void Configure(EntityTypeBuilder<SystemManagement> builder)
        {
            builder.ToTable("SystemManagement");
            builder.HasKey(x => x.ID);
            builder.Property(e => e.ID).IsRequired().ValueGeneratedOnAdd();
        }
    }
}