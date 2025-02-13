﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class EmployeesWithAllowancesViewModel
    {
        public int ID { get; set; }
        public string EmployeeID { get; set; } = String.Empty;
        public string AllowanceID { get; set; } = String.Empty;

        public DateTime Date { get; set; }
    }
}