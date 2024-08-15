using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Systems
{
    public class SystemManagementService : ISystemManagementService
    {
        private readonly QLNSDbContext _context;

        public SystemManagementService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<SystemManagement> GetLanguage(language language, string FunctionID)
        {
            var data = await _context.SystemManagements.FirstOrDefaultAsync(x => x.Language==language && x.FunctionID==FunctionID);
            return data;
        }

        public async Task<List<SystemManagement>> GetSystemManagement(language language, string FunctionID)
        {
            var data = from p in _context.SystemManagements
                       where (p.Language == language && p.Layout == FunctionID) || (p.ParentID == FunctionID && p.KindSystem == KindSystem.Group)
                       select p;
            return await data.ToListAsync();
        }
    }
}