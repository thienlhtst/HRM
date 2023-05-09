using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class AllowanceAPIClient : IAllowanceAPIClient
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public AllowanceAPIClient(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<bool> Create(AllowanceCreateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.Name), "Name");
            requestContent.Add(new StringContent(request.Money.ToString()), "Money");
            var response = await client.PostAsync("/api/Allowance/createallowance", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string id)
        {
            var client = _httpClientFactory.CreateClient(id);
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/Allowance/" + id);
            return response.IsSuccessStatusCode;
        }

        public async Task<List<AllowanceViewModel>> GetAll()
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Allowance");
            var body = await response.Content.ReadAsStringAsync();
            var allowance = JsonConvert.DeserializeObject<List<AllowanceViewModel>>(body);
            return allowance;
        }

        public async Task<PagedResult<AllowanceViewModel>> GetAllowancePaging(GetAllowancePaging request)
        {
            string page = $"/api/Allowance/paging?Keyword=" +
                          $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
            {
                page = $"/api/Allowance/paging?" +
                          $"PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            }
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(page);
            var body = await response.Content.ReadAsStringAsync();
            var allowance = JsonConvert.DeserializeObject<PagedResult<AllowanceViewModel>>(body);
            return allowance;
        }

        public async Task<AllowanceViewModel> GetByID(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Allowance/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<AllowanceViewModel>(body);
            return data;
        }

        public async Task<AllowanceEditRequest> GetByIdForEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Allowance/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<AllowanceEditRequest>(body);
            return data;
        }

        public async Task<bool> Update(AllowanceEditRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.Name), "Name");
            requestContent.Add(new StringContent(request.Money.ToString()), "Money");
            var response = await client.PutAsync($"/api/Allowance/" + request.ID, requestContent);
            return response.IsSuccessStatusCode;
        }
    }
}