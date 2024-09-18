﻿using HRM.Entity.RelationShips;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Entity.Entities
{
    public class LabourHour
    {
        public int ID { get; set; }
        public string Name { get; set; } = "";

        public List<Day> Days { get; set; } = new List<Day>();
        public int Factor { get; set; }
        public List<WorkHour> workHours { get; } = new();
    }
}