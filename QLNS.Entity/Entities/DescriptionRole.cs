using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class DescriptionRole
    {
        public int ID { get; set; }
        public string RoleID { get; set; } = "";
        public Role? Role { get; set; } = null!;
        public string Name { get; set; } = "";
    }
}