using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.AllowanceRules
{
    public class GetAllowanceRulesPagingRequest : PagingRequestBase
    {
        public string Keywork { get; set; } = String.Empty;
    }
}