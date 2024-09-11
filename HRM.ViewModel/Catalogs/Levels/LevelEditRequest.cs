using HRM.Entity.Entities;
using HRM.Entity.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Catalogs.Levels
{
    public class LevelEditRequest
    {
        public int ID { get; set; }
        public int RoleID { get; set; }

        [Required(ErrorMessage = "Name is required"), StringLength(50, MinimumLength = 2)]
        public string Name { get; set; }
    }
}