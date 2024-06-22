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
    public class ChatConfiguration : IEntityTypeConfiguration<Chat>
    {
        public void Configure(EntityTypeBuilder<Chat> builder)
        {
            builder.ToTable("Chat");
            builder.HasKey(x => x.ID);
            builder.Property(x => x.ID).IsRequired();
            builder.HasOne(x=>x.Employee).WithMany(x=>x.Chat).HasForeignKey(x=>x.EmployeeID);

        }
    }
}
