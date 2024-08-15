using HRM.ViewModel.Catalogs.WorkHour;
using HRM.ViewModel.Common;

namespace HRMApiBackend.Hub
{
    public interface IHubClient
    {
        Task BroadcastMessage(RealtimeWH msg);
    }
}