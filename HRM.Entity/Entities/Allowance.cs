﻿using HRM.Entity.RelationShips;
using HRM.Entity.Shared;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class Allowance : LanguageID
    {
        public int ID { get; set; }
        public string Name { get; set; } = "";
        public int Money { get; set; }
        public List<EmployeesWithAllowances> EWA { get; } = new();

        public List<AllowanceRules> Rules { get; } = new();
    }
}