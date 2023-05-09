using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.RelationShips
{
	public class EmployeesWithAllowances
	{
		[Key]
		
		public int ID { get; set; }
		public string EmployeeID { get; set; }
		public string AllowanceID { get; set; }
		public Employees Employess { get; set; } = null!;
		public Allowance Allowance { get; set; } = null!;
		public DateTime Date { get; set; }
	}
}
