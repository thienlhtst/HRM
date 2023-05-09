using QLNS.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
	public class Allowance
	{
		
		public string IDdddd { get; set; }
		public string Name { get;set; }
		public int Money { get; set; }
		public List<EmployeesWithAllowances> EWA { get; } = new();
	}
}
