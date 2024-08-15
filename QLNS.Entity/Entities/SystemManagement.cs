using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class SystemManagement
    {
        public int ID { get; set; }
        public string? FunctionID { get; set; } = null;
        public string? ParentID { get; set; } = null;
        public language? Language { get; set; }

        public string? Layout { get; set; } = null;
        public string? Name { get; set; } = null;
        public string? Description { get; set; } = null;
        public KindSystem? KindSystem { get; set; }
        public KindInput? KindInput { get; set; }

        public string? Label { get; set; } = null;
        public string? Icon { get; set; } = null;
        public string? Values { get; set; } = null;
    }
}