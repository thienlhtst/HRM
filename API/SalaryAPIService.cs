using Azure;
using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Ranks;
using QLNS.ViewModel.Catalogs.Salary;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;

using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class SalaryAPIService : /*BaseApiClient,*/     ISalaryAPIService
    {
        /* private readonly IHttpContextAccessor _httpContextAccessor;
         private readonly IHttpClientFactory _httpClientFactory;
         private readonly IConfiguration _configuration;

         public EmployeeAPIClient(IHttpClientFactory httpClientFactory,
                    IHttpContextAccessor httpContextAccessor,
                     IConfiguration configuration)
             : base(httpClientFactory, httpContextAccessor, configuration)
         {
             _httpContextAccessor = httpContextAccessor;
             _configuration = configuration;
             _httpClientFactory = httpClientFactory;
         }*/
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public SalaryAPIService(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        public async Task<bool> Create(SalaryCreateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.RankID), "RankID");
            requestContent.Add(new StringContent(request.PositionID), "PositionID");
            requestContent.Add(new StringContent(request.Money.ToString()), "Money");
            var response = await client.PostAsync("/api/Salary/createsalary", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string SalaryID)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/Salary/" + SalaryID);
            return response.IsSuccessStatusCode;
        }

        public async Task<SalaryVM> GetById(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Salary/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<SalaryVM>(body);
            return data;
        }

        public async Task<SalaryEditRequest> GetByIdForEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Salary/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<SalaryEditRequest>(body);
            return data;
        }

        public async Task<PagedResult<SalaryVM>> GetSalaryPaging(GetSalaryPagingRequest request)
        {
            string a = $"/api/Salary/paging?Keyword=" +
                $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                a = $"/api/Salary/paging?" +
                    $"&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(a);
            var body = await response.Content.ReadAsStringAsync();
            var salary = JsonConvert.DeserializeObject<PagedResult<SalaryVM>>(body);
            return salary;
        }

        public async Task<bool> Update(SalaryEditRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.ID), "ID");
            requestContent.Add(new StringContent(request.RankID), "RankID");
            requestContent.Add(new StringContent(request.PositionID), "PositionID");
            requestContent.Add(new StringContent(request.Money.ToString()), "Money");
            var response = await client.PutAsync($"/api/Salary/" + request.ID, requestContent);
            return response.IsSuccessStatusCode;
        }
    }
}