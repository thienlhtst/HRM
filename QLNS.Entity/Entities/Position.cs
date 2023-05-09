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
        
        public  string IDposition { get; set; }
		public string Name { get; set; }
		public ICollection<Employees> Employees { get;}= new List<Employees>();
		public List<Salary> Salaries { get; } = new();
		
	}
}
