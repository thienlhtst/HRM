using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Entity.Entities
{
	public class Salary
	{
      
        public string ID { get; set; }
		public string RankID { get; set; }
		public string PositionID { get; set; }
		public Rank Rank { get; set; } = null!;
		public Position Position { get; set; } = null!;
        [Column(TypeName = "decimal(18,2)")]
        public decimal Money { get;set; }
	}
}
