using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Allowance;
using QLNS.ViewModel.Catalogs.EmployeesWithAllowances;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class EmployeesWithAllowanceAPIService : IEmployeesWithAllowancesAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public EmployeesWithAllowanceAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<bool> auto(EwaAutoCheckRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.AllowanceID), "AllowanceID");
            requestContent.Add(new StringContent(request.Day.ToString()), "Day");
            requestContent.Add(new StringContent(request.Month.ToString()), "Month");
            requestContent.Add(new StringContent(request.Year.ToString()), "Year");
            var response = await client.PostAsync("/api/EmployeesWithAllowances/auto", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<PagedResult<EwaAutoNow>> GetEWANowPaging(GetEwaRequest request)
        {
            string page = $"/api/EmployeesWithAllowances/autoNow?Keyword=" +
                          $"{request.Keyword}&date={request.date.Year + "-" + request.date.Month + "-" + request.date.Day}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
            {
                page = $"/api/EmployeesWithAllowances/autoNow?" +
                          $"date={request.date.Year + "-" + request.date.Month + "-" + request.date.Day}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            }
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(page);
            var body = await response.Content.ReadAsStringAsync();
            var ewa = JsonConvert.DeserializeObject<PagedResult<EwaAutoNow>>(body);
            return ewa;
        }

        public async Task<PagedResult<EmployeesWithAllowancesViewModel>> GetEWAPaging(GetEmployeesWithAllowancesPaging request)
        {
            string page = $"/api/EmployeesWithAllowances/paging?Keyword=" +
                          $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
            {
                page = $"/api/EmployeesWithAllowances/paging?" +
                          $"PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            }
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(page);
            var body = await response.Content.ReadAsStringAsync();
            var ewa = JsonConvert.DeserializeObject<PagedResult<EmployeesWithAllowancesViewModel>>(body);
            return ewa;
        }
    }
}