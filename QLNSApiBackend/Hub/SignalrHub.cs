using Microsoft.AspNetCore.SignalR;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;

namespace QLNSApiBackend.Hub
{
    public class SignalrHub : Hub<IHubClient>
    {
        public async Task BroadcastMessage(RealtimeWH msg)
        {
            await Clients.All.BroadcastMessage(msg);
        }
    }
}