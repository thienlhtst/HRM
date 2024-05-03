using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class Level
    {
        public string ID { get; set; }
        public string RoleID { get; set; }
        public string Name { get; set; }
        public List<Salary> Salaries { get; } = new();
        public Role? Roles { get; set; }
    }
}