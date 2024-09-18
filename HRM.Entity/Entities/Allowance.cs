﻿using HRM.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Allowance
    {
        public int ID { get; set; }
        public string Name { get; set; } = "";
        public int Money { get; set; }
        public List<EmployeesWithAllowances> EWA { get; } = new();

        public List<AllowanceRules> Rules { get; } = new();
    }
}