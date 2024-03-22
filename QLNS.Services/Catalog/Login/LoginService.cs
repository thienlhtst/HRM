using Azure.Core;

using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QLNS.DataAccess;
using QLNS.ViewModel.Systems;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace QLNS.Services.Catalog.Login
{
    public class LoginService : ILoginService
    {
        private readonly QLNSDbContext _context;
        private IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public LoginService(QLNSDbContext context, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<List<LoginRequest>> GetAll()
        {
            var query = from p in _context.Employee
                        join ps in _context.Salaries on p.SalaryID equals ps.ID
                        join pt in _context.Ranks on ps.RankID equals pt.IDrank
                        select new { p, pt };
            var data = await query.Select(x => new LoginRequest()
            {
                ID = x.p.ID,
                Name = x.p.LastName + " " + x.p.FirstName,
                Account = x.p.Account,
                Password = x.p.Password,
                RankRole = x.pt.RankRoleID
            }).ToListAsync();

            return data;
        }

        public async Task<LoginRequest> Login(LoginModel loginModel)
        {
            List<LoginRequest> li = await GetAll();
            var login = li.Find(x => x.Account == loginModel.account && x.Password == loginModel.password);
            if (login != null)
            {
                login.accessToken = CreateToken(login);
                return login;
            }
            return null;
        }

        public string CreateToken(LoginRequest user)
        {
            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.Account),
                new Claim(ClaimTypes.Role, user.RankRole),
                new Claim(ClaimTypes.Actor, user.ID),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                _configuration.GetSection("JwtBearer:Token").Value!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds
                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        public string GetMyName()
        {
            var result = string.Empty;

            if (_httpContextAccessor.HttpContext is not null)
            {
                result = _httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.Name);
            }
            return result;
        }
    }
}