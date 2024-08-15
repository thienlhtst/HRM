using System.ComponentModel.DataAnnotations.Schema;

namespace HRM.Entity.Entities
{
    public class Salary
    {
        public string ID { get; set; } = "";
        public string LevelID { get; set; } = "";
        public string PositionID { get; set; } = "";
        public Level Level { get; set; } = null!;
        public Position Position { get; set; } = null!;

        [Column(TypeName = "decimal(18,2)")]
        public decimal Money { get; set; }

        public List<Employees> Employees { get; } = new();

        public List<DetailSalary> DetailSalary { get; } = new();
    }
}