﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.EmployeesWithAllowances
{
    public class CreateEWA
    {
        public Guid EmployeeID { get; set; }
        public int AllowanceID { get; set; }
        public DateTime Date { get; set; }
    }
}