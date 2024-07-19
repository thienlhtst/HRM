using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess.Configurations
{
    public class ChatDetailConfiguration : IEntityTypeConfiguration<ChatDetail>
    {
        public void Configure(EntityTypeBuilder<ChatDetail> builder)
        {
            builder.ToTable("ChatDetail");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).IsRequired();
            builder.HasOne(x => x.Chat).WithMany(x => x.ChatDetail).HasForeignKey(x => x.IdChat);
            builder.Property(x => x.IdEmployee).HasMaxLength(20);
            builder.Property(x=>x.Content);
            builder.Property(x => x.Time);
        }
    }
}
