using QLNS.ViewModel.Catalogs.Employees;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApi.Service
{
    public interface IChatService
    {
        Task<EmployeeChatViewModel> CheckEmployee(string id);
    }
}
