using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Chat
{
    public class SendChatDetail
    {
        public string Id { get; set; }
        public string IdChat { get; set; }
        public string IdEmployee { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }
    }
}
