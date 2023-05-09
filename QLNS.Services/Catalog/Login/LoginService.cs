using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.ViewModel.Systems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace QLNS.Services.Catalog.Login
{
    public class LoginService : ILoginService
    {
        private readonly QLNSDbContext _context;

        public LoginService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<List<LoginRequest>> GetAll()
        {
            var query = from p in _context.Employee
                        join pt in _context.Ranks on p.RankID equals pt.IDrank
                        select new { p, pt };
            var data = await query.Select(x=> new LoginRequest()
            {
                ID = x.p.ID,
                Account = x.p.Account,
                Password = x.p.Password,
                RankRole =x.pt.RankRoleID
            }).ToListAsync();

            return data;
        }

        public async Task<LoginRequest> Login(LoginModel loginModel)
        {
            List<LoginRequest> li = await GetAll();
            var login = li.Find(x => x.Account == loginModel.account && x.Password == loginModel.password);
            if (login != null)
            {
                return login;
            }
            return null;
            
        }

       
    }
}
