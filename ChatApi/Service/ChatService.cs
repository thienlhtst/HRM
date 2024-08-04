using QLNS.ViewModel.Catalogs.Employees;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace ChatApi.Service
{
    public class ChatService : IChatService
    {
        private readonly HttpClient _httpClient;

        public ChatService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<EmployeeChatViewModel> CheckEmployee(string id)
        {
            var apiurl = "localhost:3333/employee/getbyid";
            var response = await _httpClient.GetAsync(apiurl);
            return await response.Content.ReadFromJsonAsync<EmployeeChatViewModel>();
        }
    }
}
