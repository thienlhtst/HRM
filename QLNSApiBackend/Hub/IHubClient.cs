using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;

namespace QLNSApiBackend.Hub
{
    public interface IHubClient
    {
        Task BroadcastMessage(RealtimeWH msg);
    }
}