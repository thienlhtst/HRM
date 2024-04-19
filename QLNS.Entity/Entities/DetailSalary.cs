using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class DetailSalary
    {
        public string ID {  get; set; }

        public Decimal IDSalary { get; set; }

        public Decimal BonusSalary { get; set; }

        public Salary? Salary { get; set; }

    }
}
