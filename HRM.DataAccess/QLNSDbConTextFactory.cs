using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.DataAccess
{
	public class HRMDbConTextFactory : IDesignTimeDbContextFactory<HRMDbContext>
	{
		public HRMDbContext CreateDbContext(string[] args)
		{
			IConfigurationRoot configuration = new ConfigurationBuilder()
				.SetBasePath(Directory.GetCurrentDirectory())
				.AddJsonFile("appsettings.json")
				.Build();
			var connectionString = configuration.GetConnectionString("HRMDb");
			var optionsBuilder = new DbContextOptionsBuilder<HRMDbContext>();
			optionsBuilder.UseSqlServer(connectionString);
			return new HRMDbContext(optionsBuilder.Options);
		}
	}
}
