using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Allowance
{
    public class GetAllowancePagingRequest : PagingRequestBase
    {
        public string Keyword { get; set; } = String.Empty;
    }
}
