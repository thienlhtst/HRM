using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using ApiChat;
using Bogus.DataSets;
using Faker;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Services.Catalog.Allowance;
using HRM.Services.Catalog.Employees;
using HRM.Services.Catalog.EmployeesWithAllowances;
using HRM.Services.Catalog.LabourContract;
using HRM.Services.Catalog.LabourDay;
using HRM.Services.Catalog.LabourHours;
using HRM.Services.Catalog.Levels;
using HRM.Services.Catalog.Login;
using HRM.Services.Catalog.Positions;
using HRM.Services.Catalog.Ranks;
using HRM.Services.Catalog.Salary;
using HRM.Services.Catalog.Systems;
using HRM.Services.Catalog.WorkHour;
using HRM.Services.Common;
using HRM.Services.Satistics;
using HRM.Utilities.Constants;
using HRM.ViewModel.JwtOptions;
using HRM.ViewModel.Mapper;
using HRMApiBackend.Hub;
using Swashbuckle.AspNetCore.Filters;
using MassTransit;

namespace HRMApiBackend.BackendApi
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
            services.AddControllers();
            services.AddDbContext<HRMDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString(SystemConstants.MainConnectionString))

                );       //Declare

            services.AddEndpointsApiExplorer();
            services.AddHttpContextAccessor();
            services.AddTransient<IEmployeeService, EmployeeService>();
            services.AddTransient<ILoginService, LoginService>();
            services.AddTransient<ILevelService, LevelService>();
            services.AddTransient<ISalaryService, SalaryService>();
            services.AddTransient<ILabourDayService, LabourdayService>();

            services.AddTransient<ILabourHourService, LabourHourService>();
            services.AddTransient<ISystemManagementService, SystemManagementService>();
            services.AddTransient<IManagePositionService, ManagePositionService>();
            services.AddTransient<IWorkHourService, WorkhourService>();
            services.AddTransient<IAllowanceService, AllowanceService>();
            services.AddTransient<ILabourContractService, LabourContractService>();
            services.AddTransient<IEmployeesWithAllowancesService, EmployeesWithAllowancesService>();
            services.AddTransient<IStatisticSalaryService, StatisticSalaryService>();
            services.AddTransient<IStatisticWorkHourService, StatisticWorkHourService>();
            services.AddTransient<IStorageService, FileStorageService>();
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddControllersWithViews();
            services.AddAutoMapper(typeof(Startup));
            services.AddAutoMapper(typeof(AllowanceMapper));
            services.AddAutoMapper(typeof(PositionMapper));
            services.AddAutoMapper(typeof(LevelMapper));
            services.AddAutoMapper(typeof(SalaryMapper));
            services.AddAutoMapper(typeof(LabourContractMapper));
            //services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            //services.AddAutoMapper(typeof(AllowanceMapper).Assembly);
            //masstransit
            /*  services.AddMassTransit(conf =>
              {
                  // conf.AddRequestClient<CustomerP>();
                  conf.SetKebabCaseEndpointNameFormatter();
                  conf.SetInMemorySagaRepositoryProvider();
                  var asb = typeof(Program).Assembly;
                  conf.AddConsumers(asb);
                  conf.AddSagaStateMachines(asb);
                  conf.AddSagas(asb);
                  conf.AddActivities(asb);
                  conf.UsingRabbitMq((ctx, cfg) =>
                  {
                      cfg.Host("localhost", "/", h =>
                      {
                          h.Username("guest");
                          h.Password("guest");
                      });
                      cfg.ConfigureEndpoints(ctx);
                  });
              });*/
            //masstransit
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "Swagger Timekeeping Solution", Version = "v1" });

                options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey
                });
                options.OperationFilter<SecurityRequirementsOperationFilter>();
            });
            services.AddCors(o => o.AddPolicy("CorsPolicy", b =>
            {
                b.AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin();
            }));
            services.AddSignalR(options => { options.KeepAliveInterval = TimeSpan.FromSeconds(5); }).AddMessagePackProtocol();

            services.AddAuthentication().AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                            Configuration.GetSection("JwtBearer:Token").Value!))
                };
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

            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors("CorsPolicy");
            app.UseWebSockets();

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger T2Pro V1");
            });

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapHub<SignalrHub>("/signar");
                endpoints.MapControllers();
            });
        }
    }
}