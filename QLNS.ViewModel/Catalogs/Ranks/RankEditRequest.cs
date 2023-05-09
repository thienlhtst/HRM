using QLNS.Entity.Entities;
using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Ranks
{
	public class RankEditRequest
	{

        public string IDrank { get; set; }
        public string RankRoleID { get; set; }
        public string Name { get; set; }
    }
}
