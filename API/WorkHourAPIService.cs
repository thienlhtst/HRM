using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using QLNS.ViewModel.Catalogs.Employees;
using QLNS.Utilities.Constants;
using System.Security.Policy;
using Azure;
using Azure.Core;
using Microsoft.IdentityModel.Tokens;
using QLNS.ViewModel.Common;

namespace API
{
    public class WorkHourAPIService : IWorkHourAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public WorkHourAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<bool> Checkin(CheckinModel model)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(model.EmployeesID), "EmployeesID");
            requestContent.Add(new StringContent(model.LBDID), "LBDID");
            requestContent.Add(new StringContent(model.Day.ToString()), "Day");
            requestContent.Add(new StringContent(model.Month.ToString()), "Month");
            requestContent.Add(new StringContent(model.Year.ToString()), "Year");
            requestContent.Add(new StringContent(model.HourCheckin.ToString()), "HourCheckin");
            requestContent.Add(new StringContent(model.MinuteCheckin.ToString()), "MinuteCheckin");
            var response = await client.PostAsync($"/api/WorkHour/", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Checkout(CheckoutModel model)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(model.EmployeesID), "EmployeesID");
            requestContent.Add(new StringContent(model.Day.ToString()), "Day");
            requestContent.Add(new StringContent(model.Month.ToString()), "Month");
            requestContent.Add(new StringContent(model.Year.ToString()), "Year");
            requestContent.Add(new StringContent(model.HourCheckout.ToString()), "HourCheckout");
            requestContent.Add(new StringContent(model.MinuteCheckout.ToString()), "MinuteCheckout");
            var response = await client.PutAsync($"/api/WorkHour/checkout", requestContent);
            return response.IsSuccessStatusCode;
        }

        public async Task<bool> DeleteById(int id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync($"/api/WorkHour/" + id);
            return response.IsSuccessStatusCode;
        }

        public async Task<PagedResultHome<WorkhourVMHome>> GetAllHome(GetWorkHourAllPage request)
        {
            string temp = $"/api/WorkHour/paginghome?Keyword=" +
                $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                temp = $"/api/WorkHour/paginghome?PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(temp);
            var body = await response.Content.ReadAsStringAsync();
            var users = JsonConvert.DeserializeObject<PagedResultHome<WorkhourVMHome>>(body);
            return users;
        }

        public async Task<WorkHourUpdateRequest> GetById(int id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/WorkHour/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<WorkHourUpdateRequest>(body);
            return data;
        }

        public async Task<PagedResult<WorkHourVM>> GetWorkHourPagings(GetWorkHourAllPage request)
        {
            string temp = $"/api/WorkHour/paging?Keyword=" +
                $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                temp = $"/api/WorkHour/paging?PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(temp);
            var body = await response.Content.ReadAsStringAsync();
            var users = JsonConvert.DeserializeObject<PagedResult<WorkHourVM>>(body);
            return users;
        }

        public async Task<bool> UpdateAll(WorkHourUpdateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(request.EmployeesID), "EmployeesID");
            requestContent.Add(new StringContent(request.LBDID), "LBDID");
            requestContent.Add(new StringContent(request.Day.ToString()), "Day");
            requestContent.Add(new StringContent(request.Month.ToString()), "Month");
            requestContent.Add(new StringContent(request.Year.ToString()), "Year");
            requestContent.Add(new StringContent(request.HourCheckin.ToString()), "HourCheckin");
            requestContent.Add(new StringContent(request.MinuteCheckin.ToString()), "MinuteCheckin");
            requestContent.Add(new StringContent(request.HourCheckout.ToString()), "HourCheckout");
            requestContent.Add(new StringContent(request.MinuteCheckout.ToString()), "MinuteCheckout");
            var response = await client.PutAsync($"/api/WorkHour/" + request.ID, requestContent);
            return response.IsSuccessStatusCode;
        }
    }
}