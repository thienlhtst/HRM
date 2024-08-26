using Microsoft.EntityFrameworkCore;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.ViewModel.Catalogs.SystemManagements;

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

        public async Task<List<SystemManagement>> GetSystemManagement(language language, string layout)
        {
            var data = from p in _context.SystemManagements
                       where (p.Language == language && p.Layout == layout) || (p.ParentID == layout && p.KindSystem == KindSystem.Group)
                       select p;
            return await data.ToListAsync();
        }

        public async Task<List<MenuSystems>> GetNavManagement(language language, string FuntionID)
        {
            var data = from p in _context.SystemManagements
                       where ((p.ParentID == FuntionID) && p.KindSystem==KindSystem.Group) || (((p.ParentID == null) && p.KindSystem==KindSystem.Group && p.FunctionID==FuntionID))
                       select p;
            var resultdata = await data.Select(x => new MenuSystems()
            {
                sys= x,
                sysList = new List<SystemManagement>()
            }).ToListAsync();
            foreach (var item in resultdata)
            {
                var result = await _context.SystemManagements.Where(x => x.ParentID ==item.sys.FunctionID).ToListAsync();
                item.sysList.AddRange(result);
            }
            return resultdata;
        }
    }
}