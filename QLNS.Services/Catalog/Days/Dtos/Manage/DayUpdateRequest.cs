using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Days.Dtos.Manage
{
    public class DayUpdateRequest
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int Months { get; set; }
    }
}
