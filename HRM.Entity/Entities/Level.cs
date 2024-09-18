using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Level
    {
        public int ID { get; set; }
        public int RoleID { get; set; }
        public string Name { get; set; } = "";
        public List<Salary> Salaries { get; } = new();
        public Role? Roles { get; set; }
    }
}