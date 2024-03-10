using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.Days.Dtos.Manage
{
    public class GetPagingDayRequest : PagingRequestBase
    {
        public string Keyword { get; set; }
        public int? CategoryID { get; set; }
    }
}