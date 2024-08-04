namespace ChatApi.Entity
{
    public class GroupMember
    {
        public string Id { get; set; }
        public string ConversationsID { get; set; }
        public DateTime JoinedDate { get; set; }
        public DateTime LeftDate { get; set; }

    }
}
