using Newtonsoft.Json;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace API
{
    public class RankAPIService : IRankAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public RankAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<Rank>> GetAll()
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync($"/api/Rank");
            var body = await response.Content.ReadAsStringAsync();
            var employees = JsonConvert.DeserializeObject<List<Rank>>(body);
            return employees;
        }

        public async Task<bool> Create(RankCreateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.IDrank), "ID");
            requestContent.Add(new StringContent(request.RankRoleID), "RankRoleID");
            requestContent.Add(new StringContent(request.Name), "Name");
            var response = await client.PostAsync("/api/Rank/", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string RankID)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/Rank/" + RankID);
            return response.IsSuccessStatusCode;
        }

        public async Task<RankVM> GetById(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Rank/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<RankVM>(body);
            return data;
        }

        public async Task<RankEditRequest> GetByIdForEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Rank/Ed/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<RankEditRequest>(body);
            return data;
        }

        public async Task<PagedResult<RankVM>> GetRankPaging(GetRankPagingRequest request)
        {
            string a = $"/api/Rank/paging?Keyword=" +
                $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                a = $"/api/Rank/paging?" +
                    $"&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(a);
            var body = await response.Content.ReadAsStringAsync();
            var ranks = JsonConvert.DeserializeObject<PagedResult<RankVM>>(body);
            return ranks;
        }

        public async Task<bool> Update(RankEditRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.IDrank), "ID");
            requestContent.Add(new StringContent(request.RankRoleID), "RankRoleID");
            requestContent.Add(new StringContent(request.Name), "Name");
            var response = await client.PutAsync($"/api/Rank/" + request.IDrank, requestContent);
            return response.IsSuccessStatusCode;
        }
    }
}