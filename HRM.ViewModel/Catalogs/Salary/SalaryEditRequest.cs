using HRM.Entity.Entities;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Salary
{
    public class SalaryEditRequest
    {
        public int ID { get; set; }
        public int LevelID { get; set; }
        public int PositionID { get; set; }

        [RegularExpression("^[0-9]+$")]
        public decimal Money { get; set; }
    }
}