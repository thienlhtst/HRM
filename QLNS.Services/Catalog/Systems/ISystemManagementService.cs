using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Systems
{
    public interface ISystemManagementService
    {
        Task<List<SystemManagement>> GetSystemManagement(language language, string FunctionID);

        Task<SystemManagement> GetLanguage(language language, string FunctionID);
    }
}