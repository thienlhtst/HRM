﻿using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.LabourDays
{
    public class GetListLabourDay
    {
        public int ID { get; set; }
        public int IDLB { get; set; }
        public string Name { get; set; }
        public int Days { get; set; }
        public int Months { get; set; }
    }
}