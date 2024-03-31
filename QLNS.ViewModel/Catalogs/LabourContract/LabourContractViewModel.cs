using QLNS.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Catalogs.LabourContract
{
    public class LabourContractViewModel
    {
        public string ID { get; set; }
        public string EmployeeID { get; set; }
        public string Content { get; set; }
        public string ContractSigninDate { get; set; }
        public int ContractTerm { get; set; }
        public Active Active { get; set; }
    }
}
