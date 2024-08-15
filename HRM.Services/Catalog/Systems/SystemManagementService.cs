using Microsoft.EntityFrameworkCore;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.Systems
{
    public class SystemManagementService : ISystemManagementService
    {
        private readonly HRMDbContext _context;

        public SystemManagementService(HRMDbContext context)
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