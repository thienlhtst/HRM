using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Allowance
{
    public class AllowanceCreateRequest
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Name is required"), StringLength(50, MinimumLength = 2)]
        [RegularExpression(@"^[A-Z][a-zA-Z""'\s-]*$"), Display(Name = "Name")]
        public string Name { get; set; }

        [RegularExpression("^[0-9]+$")]
        public int Money { get; set; }
    }
}