using HRM.Entity.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRM.Entity.Entities
{
    public class Salary
    {
        public int ID { get; set; }
        public int LevelID { get; set; }
        public int PositionID { get; set; }
        public Level Level { get; set; } = null!;
        public Position Position { get; set; } = null!;

        [Column(TypeName = "decimal(18,2)")]
        public decimal Money { get; set; }

        public List<Employees> Employees { get; } = new();
    }
}