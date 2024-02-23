using Azure.Core;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Employees;
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
    public class EmployeeAPIClient : /*BaseApiClient,*/     IEmployeeAPIClient
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

        public EmployeeAPIClient(IHttpClientFactory httpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = httpClientFactory;
            _configuration = configuration;
        }

        public async Task<bool> Create(EmployeeCreateRequest employeeCreateRequest)
        {
            // var json = JsonConvert.SerializeObject(employeeCreateRequest);
            //var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            if (employeeCreateRequest.ThumbnailImage != null)
            {
                byte[] data;
                using (var br = new BinaryReader(employeeCreateRequest.ThumbnailImage.OpenReadStream()))
                {
                    data = br.ReadBytes((int)employeeCreateRequest.ThumbnailImage.OpenReadStream().Length);
                }
                ByteArrayContent bytes = new ByteArrayContent(data);
                requestContent.Add(bytes, "thumbnailImage", employeeCreateRequest.ThumbnailImage.FileName);
            }
            requestContent.Add(new StringContent(employeeCreateRequest.ID), "ID");
            requestContent.Add(new StringContent(employeeCreateRequest.FirstName), "FirstName");
            requestContent.Add(new StringContent(employeeCreateRequest.LastName), "LastName");
            requestContent.Add(new StringContent(employeeCreateRequest.MiddleName), "MiddleName");
            requestContent.Add(new StringContent(employeeCreateRequest.DOB.ToString()), "DOB");
            requestContent.Add(new StringContent(employeeCreateRequest.CIC), "CIC");
            requestContent.Add(new StringContent(employeeCreateRequest.NumberPhone), "NumberPhone");
            requestContent.Add(new StringContent(employeeCreateRequest.Address), "Address");
            requestContent.Add(new StringContent(employeeCreateRequest.SalaryID), "SalaryID");
            requestContent.Add(new StringContent(employeeCreateRequest.Account), "Account");
            requestContent.Add(new StringContent(employeeCreateRequest.Password), "Password");
            requestContent.Add(new StringContent(employeeCreateRequest.Active.ToString()), "Active");
            var response = await client.PostAsync("/api/Employee/createemployee", requestContent);

            return response.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string EmployeeID)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/Employee/" + EmployeeID);
            return response.IsSuccessStatusCode;
        }

        public async Task<List<EmployeeVMStatistic>> GetAll()
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync($"/api/Employee");
            var body = await response.Content.ReadAsStringAsync();
            var employees = JsonConvert.DeserializeObject<List<EmployeeVMStatistic>>(body);
            return employees;
        }

        public async Task<EmployeeViewModel> GetById(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Employee/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<EmployeeViewModel>(body);
            return data;
        }

        public async Task<EmployeeEditRequest> GetByIdEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/Employee/edit/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<EmployeeEditRequest>(body);
            return data;
        }

        public async Task<PagedResult<EmployeeViewModel>> GetEmployeePaging(GetEmployeePagingRequest request)
        {
            string a = $"/api/Employee/paging?Keyword=" +
                $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                a = $"/api/Employee/paging?" +
                    $"&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(a);
            var body = await response.Content.ReadAsStringAsync();
            var employees = JsonConvert.DeserializeObject<PagedResult<EmployeeViewModel>>(body);
            return employees;
        }

        public async Task<bool> Update(EmployeeEditRequest employee)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var requestContent = new MultipartFormDataContent();
            requestContent.Add(new StringContent(employee.ID), "ID");
            requestContent.Add(new StringContent(employee.FirstName), "FirstName");
            requestContent.Add(new StringContent(employee.LastName), "LastName");
            requestContent.Add(new StringContent(employee.MiddleName), "MiddleName");
            requestContent.Add(new StringContent(employee.DOB.ToString()), "DOB");
            requestContent.Add(new StringContent(employee.CIC), "CIC");
            requestContent.Add(new StringContent(employee.NumberPhone), "NumberPhone");
            requestContent.Add(new StringContent(employee.Address), "Address");
            requestContent.Add(new StringContent(employee.SalaryID), "SalaryID");
            requestContent.Add(new StringContent(employee.Account), "Account");
            requestContent.Add(new StringContent(employee.Password), "Password");
            requestContent.Add(new StringContent(employee.Active.ToString()), "Active");
            requestContent.Add(new StringContent(employee.URLImage), "URLImage");

            var response = await client.PutAsync($"/api/Employee/" + employee.ID, requestContent);
            return response.IsSuccessStatusCode;
        }
    }
}