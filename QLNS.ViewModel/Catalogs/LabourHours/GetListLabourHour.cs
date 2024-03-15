using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.LabourHours
{
    public class GetListLabourHour
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public int Factor { get; set; }
        public List<Day> Days { get; set; } = new List<Day>();
    }
}