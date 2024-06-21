using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Threading.Tasks;

namespace ChatApi.Entity
{
    public class Chat
    {
        public string id { get; set; }
        public string IdUser1 { get; set; }

        public string idUser2 { get; set; }
    }
}