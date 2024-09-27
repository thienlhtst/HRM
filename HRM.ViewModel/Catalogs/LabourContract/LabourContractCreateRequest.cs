﻿using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.LabourContract
{
    public class LabourContractCreateRequest
    {
        public int ID { get; set; }
        public Guid EmployeeID { get; set; }
        public string Content { get; set; } = String.Empty;
        public DateTime ContractSigninDate { get; set; }
        public int ContractTerm { get; set; }
        public Active Active { get; set; }

    }
}