using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Allowance
{
    public class AllowanceEditRequest
    {
        public string ID { get; set; } = "";

        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "Name")]
        public string Name { get; set; } = "";

        [RegularExpression("^[0-9]+$")]
        public int Money { get; set; }
    }
}