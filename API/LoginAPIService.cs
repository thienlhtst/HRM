using Azure.Core;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.ViewModel.Systems;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class LoginAPIService : ILoginAPIService
    { 

        private readonly IHttpClientFactory _httpClientFactory;
        public LoginAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }
        public async Task<LoginRequest> LoginUser(LoginModel loginModel)
        {

            var json = JsonConvert.SerializeObject(loginModel);
            var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.PostAsync("/api/Login/loginweb", httpContent);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<LoginRequest>(body);
            return data;
        }
    }
}
