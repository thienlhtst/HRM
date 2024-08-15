using Microsoft.EntityFrameworkCore;

namespace LeaveAwardAPI.DataAccess
{
    public class DbLeaveAwardContext : DbContext
    {
        public DbLeaveAwardContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}