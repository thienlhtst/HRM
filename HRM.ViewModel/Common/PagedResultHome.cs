using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Common
{
    public class PagedResultHome<T> :PagedResultBaseHome
    {
        public List<T> Items { set; get; }
		
	}
}
