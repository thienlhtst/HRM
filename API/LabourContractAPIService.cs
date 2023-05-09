using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.LabourContract;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class LabourContractAPIService : ILabourContractAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public LabourContractAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<bool> Create(LabourContractCreateRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var responceContent = new MultipartFormDataContent();
            responceContent.Add(new StringContent(request.ID), "ID");
            responceContent.Add(new StringContent(request.EmployeeID), "EmployeeID");
            responceContent.Add(new StringContent(request.Content), "Content");
            responceContent.Add(new StringContent(request.ContractSigninDate.ToString()), "ContractSigninDate");
            responceContent.Add(new StringContent(request.ContractTerm.ToString()), "ContractTerm");
            responceContent.Add(new StringContent(request.Active.ToString()), "Active");
            var responce = await client.PostAsync("/api/LabourContract/CreateLabourContract", responceContent);
            return responce.IsSuccessStatusCode;
        }

        public async Task<bool> Delete(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.DeleteAsync("/api/LabourContract/" + id);
            return response.IsSuccessStatusCode;
        }

        public async Task<PagedResult<LabourContractViewModel>> GetLabourPaging(GetLabourContractPaging request)
        {
            string page = $"/api/LabourContract/paging?Keyword=" +
                          $"{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
            {
                page = $"/api/LabourContract/paging?" +
                          $"PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            }
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(page);
            var body = await response.Content.ReadAsStringAsync();
            var labour = JsonConvert.DeserializeObject<PagedResult<LabourContractViewModel>>(body);
            return labour;
        }

        public async Task<LabourContractViewModel> GetById(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/LabourContract/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<LabourContractViewModel>(body);
            return data;
        }

        public async Task<LabourContractEditRequest> GetByIdForEdit(string id)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync("/api/LabourContract/" + id);
            var body = await response.Content.ReadAsStringAsync();
            var data = JsonConvert.DeserializeObject<LabourContractEditRequest>(body);
            return data;
        }

        public async Task<bool> Update(LabourContractEditRequest request)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var responceContent = new MultipartFormDataContent();
            responceContent.Add(new StringContent(request.ID), "ID");
            responceContent.Add(new StringContent(request.EmployeeID), "EmployeeID");
            responceContent.Add(new StringContent(request.Content), "Content");
            responceContent.Add(new StringContent(request.ContractSigninDate.ToString()), "ContractSigninDate");
            responceContent.Add(new StringContent(request.ContractTerm.ToString()), "ContractTerm");
            responceContent.Add(new StringContent(request.Active.ToString()), "Active");
            var responce = await client.PutAsync("/api/LabourContract/" + request.ID, responceContent);
            return responce.IsSuccessStatusCode;
        }
    }
}