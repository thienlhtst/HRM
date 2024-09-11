using HRM.Entity.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Day : LanguageID
    {
        public int ID { get; set; }
        public int IDLB { get; set; }
        public LabourHour LabourHour { get; set; } = null!;
        public string Name { get; set; } = "";
        public int Days { get; set; }
        public int Months { get; set; }
    }
}