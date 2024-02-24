using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class Rank
    {
        public string IDrank { get; set; }
        public string RankRoleID { get; set; }
        public string Name { get; set; }
        public List<Salary> Salaries { get; } = new();
        public RankRole? Roles { get; set; } = null!;
    }
}