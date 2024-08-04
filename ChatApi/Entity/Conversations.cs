    
namespace ChatApi.Entity
{
    public class Conversations
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public DateTime DateCreate { get; set; }
        public DateTime LastModified { get; set; }
    }
}
