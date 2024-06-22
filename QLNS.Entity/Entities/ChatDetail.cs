using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class ChatDetail
    {
        public string Id {  get; set; }
        public string IdChat { get; set; }
        public string IdEmployeeSendMes { get; set; }
        public string IdEmployeeReceiveMes { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }

        public Chat? Chat { get; set; }
    }
}
