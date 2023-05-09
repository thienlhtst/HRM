using QLNS.ViewModel.Catalogs.WorkHour;

namespace QLNSAdminWeb.Models
{
    public class Timekeeper
    {
        public int ID { get; set; }
        public string EmployeesID { get; set; }
        public string LBDID { get; set; }
        public int Day { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int Hour { get; set; }
        public int Minute { get; set; }
        
    }
}
