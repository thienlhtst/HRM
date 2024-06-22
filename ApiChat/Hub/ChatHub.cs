using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ApiChat
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string Employeesendmesid, string Employeereceivemesid, string message)
        {
            await Clients.User(Employeereceivemesid.ToString()).SendAsync("ReceiveMessage", Employeesendmesid, message);
        }
    }
}
