using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Allowance;
using QLNS.Services.Catalog.Employees;
using QLNS.Services.Catalog.EmployeesWithAllowances;
using QLNS.Services.Catalog.LabourContract;
using QLNS.Services.Catalog.LabourDay;
using QLNS.Services.Catalog.LabourHours;
using QLNS.Services.Catalog.Login;
using QLNS.Services.Catalog.Positions;
using QLNS.Services.Catalog.Ranks;
using QLNS.Services.Catalog.Salary;
using QLNS.Services.Catalog.WorkHour;
using QLNS.Services.Common;
using QLNS.Services.Satistics;
using QLNS.Utilities.Constants;
using QLNS.ViewModel.JwtOptions;
using QLNSApiBackend.Hub;
using Swashbuckle.AspNetCore.Filters;

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
            services.AddControllers();
            services.AddDbContext<QLNSDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString(SystemConstants.MainConnectionString))

                );       //Declare

            services.AddEndpointsApiExplorer();
            services.AddHttpContextAccessor();
            services.AddTransient<IEmployeeService, EmployeeService>();
            services.AddTransient<ILoginService, LoginService>();
            services.AddTransient<IRankService, RankService>();
            services.AddTransient<ISalaryService, SalaryService>();
            services.AddTransient<ILabourDayService, LabourdayService>();

            services.AddTransient<ILabourHourService, LabourHourService>();

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
                /* options.AddSecurityDefinition(BasicAuthenticationDefaults.AuthenticationScheme,
                     new OpenApiSecurityScheme()
                     {
                         Name = "Authorization",
                         Type = SecuritySchemeType.Http,
                         Scheme = BasicAuthenticationDefaults.AuthenticationScheme,
                         In = ParameterLocation.Header,
                         Description = ""
                     });
                 options.AddSecurityRequirement(new OpenApiSecurityRequirement
                 {
                     {
                     new OpenApiSecurityScheme
                     {
                         Reference = new OpenApiReference
                         {
                             Type = ReferenceType.SecurityScheme,
                             Id = BasicAuthenticationDefaults.AuthenticationScheme
                         }
                     },
                     new string[] {"Basic"}
                     }
                 });*/

                /*options.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.Http,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    In = ParameterLocation.Header,
                    BearerFormat = "JWT",
                    Description = "JWT Authorization header"
                });

                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                 {
                     {
                         new OpenApiSecurityScheme
                         {
                             Reference = new OpenApiReference
                             {
                                 Type = ReferenceType.SecurityScheme,
                                 Id = JwtBearerDefaults.AuthenticationScheme
                             },
                         },
                        new string[] {"Bearer"}
                     }
                 });*/
            });
            services.AddCors(o => o.AddPolicy("CorsPolicy", b =>
            {
                b.AllowAnyMethod()
                .AllowAnyHeader()
                .AllowAnyOrigin();
            }));
            services.AddSignalR(options => { options.KeepAliveInterval = TimeSpan.FromSeconds(5); }).AddMessagePackProtocol();

            /*services.AddAuthentication(options =>
            {
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>(
             BasicAuthenticationDefaults.AuthenticationScheme, null)
            .AddScheme<JwtBearerOptions, JwtBearerHandler>(JwtBearerDefaults.AuthenticationScheme, options =>
            {
                var jwtBearerSettings = Configuration.GetSection("JwtBearer").Get<JwtOption>();

                if (jwtBearerSettings == null)
                {
                    throw new NullReferenceException();
                }

                options.SaveToken = true;
                options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
                {
                    ValidIssuer = jwtBearerSettings.Issuer,
                    ValidAudience = jwtBearerSettings.Audience,
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(jwtBearerSettings.SigningKey)),
                    ClockSkew = TimeSpan.Zero,
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                };
            });*/
            /*services.AddOptions<JwtOption>().Bind(Configuration.GetSection("JwtBearer")).ValidateDataAnnotations();
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
             options.TokenValidationParameters = new TokenValidationParameters
             {
                 ValidIssuer = Configuration["JwtSettings:Issuer"],
                 ValidAudience = Configuration["JwtSettings:Audience"],
                 IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(Configuration["Key"]!)),
                 ValidateIssuer = true,
                 ValidateAudience = true,
                 ValidateLifetime = true,
                 ValidateIssuerSigningKey = true,
             };
            });
            services.AddAuthorization();*/
            /* services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                 .AddJwtBearer(options =>
             {
                 options.RequireHttpsMetadata = false;
                 options.SaveToken = true;
                 options.TokenValidationParameters = new TokenValidationParameters()
                 {
                     ValidateIssuer = true,
                     ValidateAudience = true,
                     ValidAudience = Configuration["JwtBearer:Audience"],
                     ValidIssuer = Configuration["JwtBearer:Issuer"],
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtBearer:Key"]))
                 };
                 options.Events = new JwtBearerEvents
                 {
                     OnMessageReceived = context =>
                     {
                         if (context.Request.Query.TryGetValue("token", out var token))
                         {
                             context.Token = token;
                         }
                         return Task.CompletedTask;
                     }
                 };
             });*/

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