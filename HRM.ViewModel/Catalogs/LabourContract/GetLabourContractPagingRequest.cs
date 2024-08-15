using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.LabourContract
{
    public class GetLabourContractPagingRequest : PagingRequestBase
    {
        public string Keyword { get;set; } = string.Empty;
    }
}
