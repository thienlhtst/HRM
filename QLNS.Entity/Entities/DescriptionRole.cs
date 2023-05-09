using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
	public class DescriptionRole
	{
		public int ID { get; set; }
		public string RankRoleID { get; set; }
		public RankRole? RankRole { get; set; } = null!;
		public string Name { get; set; }


	}
}
