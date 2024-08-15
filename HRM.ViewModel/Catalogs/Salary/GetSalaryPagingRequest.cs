using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Salary
{
	public class GetSalaryPagingRequest : PagingRequestBase
    {
        public string Keyword { get; set; } = string.Empty;
	}

	
}
