using Microsoft.AspNetCore.SignalR;
using HRM.DataAccess;
using HRM.Entity.Entities;
using System.Threading.Tasks;

namespace ApiChat
{
    public class ChatHub : Hub
    {
        private readonly HRMDbContext _context;

        public ChatHub(HRMDbContext context)
        {
            _context = context;
        }

        public async Task JoinChat(string chatId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, chatId);
            await Clients.Group(chatId).SendAsync("ReceiveMessage", $"{Context.ConnectionId} has joined the group {chatId}.");
        }

        // Phương thức này cho phép người dùng rời khỏi một nhóm chat
        public async Task LeaveChat(string chatId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, chatId);
            await Clients.Group(chatId).SendAsync("ReceiveMessage", $"{Context.ConnectionId} has left the group {chatId}.");
        }

        public async Task SendMessage(string chatId, string employeeId, string message)
        {
            await Clients.Group(chatId).SendAsync("ReceiveMessage", employeeId, message);
        }
    }
}