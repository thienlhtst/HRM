using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Allowance;
using QLNS.Services.Catalog.Days;
using QLNS.Services.Catalog.Employees;
using QLNS.Services.Catalog.EmployeesWithAllowances;
using QLNS.Services.Catalog.LabourContract;
using QLNS.Services.Catalog.Login;
using QLNS.Services.Catalog.Positions;
using QLNS.Services.Catalog.Ranks;
using QLNS.Services.Catalog.Salary;
using QLNS.Services.Catalog.WorkHour;
using QLNS.Services.Common;
using QLNS.Services.Satistics;
using QLNS.Utilities.Constants;

namespace QLNSApiBackend.BackendApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddDbContext<QLNSDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString(SystemConstants.MainConnectionString)));       //Declare

            services.AddTransient<IEmployeeService, EmployeeService>();
            services.AddTransient<IPublicDayService, PublicDayService>();
            services.AddTransient<IManageDayService, ManageDayService>();
            services.AddTransient<ILoginService, LoginService>();
            services.AddTransient<IRankService, RankService>();
            services.AddTransient<ISalaryService, SalaryService>();
            services.AddTransient<IManagePositionService, ManagePositionService>();
            services.AddTransient<IWorkHourService, WorkhourService>();
            services.AddTransient<IAllowanceService, AllowanceService>();
            services.AddTransient<ILabourContractService, LabourContractService>();
            services.AddTransient<IEmployeesWithAllowancesService, EmployeesWithAllowancesService>();
            services.AddTransient<IStatisticSalaryService, StatisticSalaryService>();
            services.AddTransient<IStatisticWorkHourService, StatisticWorkHourService>();
            services.AddTransient<IStorageService, FileStorageService>();
            services.AddControllersWithViews();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Swagger eShop Solution", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();
            app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger eShopSolution V1");
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}