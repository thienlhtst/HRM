using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace LeaveAwardAPI.DataAccess
{
    public class DbLeaveAwardContextFactory : IDesignTimeDbContextFactory<DbLeaveAwardContext>
    {
        public DbLeaveAwardContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            var connectionString = configuration.GetConnectionString("LeaveAwardDB");
            var optionsBuilder = new DbContextOptionsBuilder<DbLeaveAwardContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new DbLeaveAwardContext(optionsBuilder.Options);
        }
    }
}