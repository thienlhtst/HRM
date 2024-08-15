using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
    public class Position
    {
        public string ID { get; set; } = "";
        public string Name { get; set; } = "";
        public List<Salary> Salaries { get; } = new();
    }
}