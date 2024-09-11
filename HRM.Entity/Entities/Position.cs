using HRM.Entity.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Position : LanguageID
    {
        public int ID { get; set; }
        public string Name { get; set; } = "";
        public List<Salary> Salaries { get; } = new();
    }
}