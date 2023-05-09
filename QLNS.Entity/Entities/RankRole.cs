using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
	public class RankRole
	{
		public string ID { get; set; }
		
		public string Name { get; set; }
		public ICollection<Rank> Rank { get; } = new List<Rank>();
		public ICollection<DescriptionRole> Description { get; set; } = new List<DescriptionRole>();
	}
}
