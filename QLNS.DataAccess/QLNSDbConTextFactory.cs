using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.DataAccess
{
	public class QLNSDbConTextFactory : IDesignTimeDbContextFactory<QLNSDbContext>
	{
		public QLNSDbContext CreateDbContext(string[] args)
		{
			IConfigurationRoot configuration = new ConfigurationBuilder()
				.SetBasePath(Directory.GetCurrentDirectory())
				.AddJsonFile("appsettings.json")
				.Build();
			var connectionString = configuration.GetConnectionString("QLNSDb");
			var optionsBuilder = new DbContextOptionsBuilder<QLNSDbContext>();
			optionsBuilder.UseSqlServer(connectionString);
			return new QLNSDbContext(optionsBuilder.Options);
		}
	}
}
