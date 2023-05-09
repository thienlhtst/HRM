using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.Satictis
{
    public class GetStatisticAllPage : PagingRequestBase
    {
        public string Keyword { get; set; } = string.Empty;
        public int Month { get; set; }

    }
}
