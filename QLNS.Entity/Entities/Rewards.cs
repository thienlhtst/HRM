using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
	public class Rewards
	{
      
        public string ID { get; set; }
		public string EmployeeID { get; set; }
		public Employees Employees { get; set; } = null!;
		public string Name { get; set; }
		public string Content { get; set;}
		public DateTime Date { get; set; }
		public int Money { get; set; }

	}
}
