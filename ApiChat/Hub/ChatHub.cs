using ApiChat.Entity;
using Microsoft.AspNetCore.SignalR;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Chat;
using System.Threading.Tasks;

namespace ApiChat
{
    public class ChatHub : Hub
    {
        private readonly QLNSDbContext _context;

        public ChatHub(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task SendMessage(SendChatDetail chat)
        {
            var chatDetail = new ChatDetail
            {
                Id = chat.Id,
                IdChat = chat.IdChat,
                IdEmployeeSendMes = chat.IdEmployeeSendMes,
                IdEmployeeReceiveMes = chat.IdEmployeeReceiveMes,
                Content = chat.Content,
                Time = chat.Time,

            };

            _context.ChatDetail.Add(chatDetail);
            await _context.SaveChangesAsync();

            await Clients.Group(chat.IdChat.ToString()).SendAsync("ReceiveMessage", chat.IdEmployeeReceiveMes, chat.Content);
        }

        public async Task JoinChat(int chatId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, chatId.ToString());
        }

        public async Task LeaveChat(int chatId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, chatId.ToString());
        }
    }
}
