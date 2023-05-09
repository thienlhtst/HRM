using API;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using QLNS.Services.Catalog.Salary;
using QLNS.Utilities.Constants;
using System.Diagnostics.Contracts;

namespace QLNSAdminWeb
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
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
        .AddCookie(options =>
        {
            // Thiết lập các tuỳ chọn cookie authentication
            options.Cookie.HttpOnly = true;
            options.Cookie.SameSite = SameSiteMode.Strict;
            options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
            options.LoginPath = "/Login/Index";
        });
            services.AddControllersWithViews().AddSessionStateTempDataProvider();
            services.AddHttpClient();

            services.AddTransient<IEmployeeAPIClient, EmployeeAPIClient>();
            services.AddTransient<ILoginAPIService, LoginAPIService>();
            services.AddTransient<IWorkHourAPIService, WorkHourAPIService>();
            services.AddTransient<IStatisticAPIService, StatisticAPIService>();
            services.AddTransient<IAllowanceAPIClient, AllowanceAPIClient>();
            services.AddTransient<IRankAPIService, RankAPIService>();
            services.AddTransient<ISalaryAPIService, SalaryAPIService>();

            services.AddTransient<IPositionAPIService, PositionAPIService>();
            services.AddTransient<ILabourContractAPIService, LabourContractAPIService>();
            services.AddTransient<IEmployeesWithAllowancesAPIService,EmployeesWithAllowanceAPIService>();
            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                // options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });
            services.AddRazorPages().AddSessionStateTempDataProvider();
            services.AddSession();
            IMvcBuilder builder = services.AddRazorPages();

            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            if (environment == Environments.Development)
            {
                builder.AddRazorRuntimeCompilation();
            }
        }

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
            app.UseSession();
            app.UseAuthentication();

            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Login}/{action=Index}/{id?}");
            });
        }
    }
}