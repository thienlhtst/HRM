using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.LabourContract
{
    public class GetLabourContractPaging : PagedResultBase
    {
        public string Keyword { get; set; }
    }
}
