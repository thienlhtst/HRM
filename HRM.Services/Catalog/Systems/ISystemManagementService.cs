using HRM.Entity.Entities;
using HRM.Entity.Enums;
using HRM.ViewModel.Catalogs.SystemManagements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.Systems
{
    public interface ISystemManagementService
    {
        Task<List<SystemManagement>> GetSystemManagement(language language, string FunctionID);

        Task<SystemManagement> GetLanguage(language language, string layout);

        Task<List<MenuSystems>> GetNavManagement(language language, string FuntionID);

        Task<List<MenuSystems>> GetMenuManagement(language language, string FuntionID);
    }
}