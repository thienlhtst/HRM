namespace ChatApi.Entity
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string ConversationsID { get; set; }
        public string SenderID { get; set; }

        public string SenderName { get; set; }

        public DateTime Time { get; set; }

    }
}
