using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Role
    {
        public int ID { get; set; }

        public string Name { get; set; } = "";
        public ICollection<Level> Level { get; } = new List<Level>();
        public ICollection<DescriptionRole> Description { get; set; } = new List<DescriptionRole>();
    }
}