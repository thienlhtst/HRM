using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Day
    {
        public string ID { get; set; } = "";
        public string IDLB { get; set; } = "";
        public LabourHour LabourHour { get; set; } = null!;
        public string Name { get; set; } = "";
        public int Days { get; set; }
        public int Months { get; set; }
    }
}