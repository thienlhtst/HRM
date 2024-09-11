using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Shared
{
    public class LanguageID
    {
        public string? FunctionID { get; set; }
        public language? Language { get; set; }

        public LanguageID()
        {
            FunctionID=null;
            Language=null;
        }
    }
}