using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class Chat
    {
        public string ID { get; set; }
        public string EmployeeID { get; set; }

        public Employees Employee { get; set; } = null!;

        public List<ChatDetail> ChatDetail { get; } = new();
    }
}
