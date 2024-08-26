using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.SystemManagements
{
    public class MenuSystems
    {
        public SystemManagement sys { get; set; }
        public List<SystemManagement> sysList { get; set; } = new List<SystemManagement>();
    }
}