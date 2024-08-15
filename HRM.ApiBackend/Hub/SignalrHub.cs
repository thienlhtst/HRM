using Microsoft.AspNetCore.SignalR;
using HRM.ViewModel.Catalogs.WorkHour;
using HRM.ViewModel.Common;

namespace HRMApiBackend.Hub
{
    public class SignalrHub : Hub<IHubClient>
    {
        public async Task BroadcastMessage(RealtimeWH msg)
        {
            await Clients.All.BroadcastMessage(msg);
        }
    }
}