using Newtonsoft.Json;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.Services.Catalog.Positions.Dtos.Manage;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using QLNS.ViewModel.Dtos;

namespace API
{
    public class PositionAPIService : IPositionAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public PositionAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<List<Position>> GetAll()
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync($"/api/Position");
            var body = await response.Content.ReadAsStringAsync();
            var employees = JsonConvert.DeserializeObject<List<Position>>(body);
            return employees;
        }

        public async Task<bool> Create(PositionCreateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.Name), "Name");
            var response = await client.PostAsync("/api/Position/createposition", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string id)
        {
            var client = _httpClientFactory.CreateClient(id);
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/Position/" + id);
            return response.IsSuccessStatusCode;
        }

        public async Task<PagedResult<PositionViewModel>> GetPositionPaging(GetPagingPositionRequest request)
        {
            string page = $"/api/Position/paging?Keyword=" +
                          $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
            {
                page = $"/api/Position/paging?" +
                          $"PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            }
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(page);
            var body = await response.Content.ReadAsStringAsync();
            var position = JsonConvert.DeserializeObject<PagedResult<PositionViewModel>>(body);
            return position;
        }

        public async Task<PositionUpdateRequest> GetByIdForEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Position/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<PositionUpdateRequest>(body);
            return data;
        }

        public async Task<bool> Update(PositionUpdateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.Name), "Name");
            var response = await client.PutAsync($"/api/Position/" + request.ID, requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<PositionViewModel> GetById(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Position/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<PositionViewModel>(body);
            return data;
        }
    }
}