using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Satictis;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public class StatisticAPIService : IStatisticAPIService
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public StatisticAPIService(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<PagedResult<WorkhourStatistic>> GetAllPage(GetStatisticAllPage request)
        {
            string temp = $"/api/Statistic/paging?Keyword=" +
                $"Month={request.Month}&{request.Keyword}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            if (request.Keyword.IsNullOrEmpty())
                temp = $"/api/Statistic/paging?Month={request.Month}&PageIndex={request.PageIndex}&PageSize={request.PageSize}";
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync(temp);
            var body = await response.Content.ReadAsStringAsync();
            var users = JsonConvert.DeserializeObject<PagedResult<WorkhourStatistic>>(body);
            return users;
        }

        public async Task<List<WorkhourStatistic>> GetPage(int month, int year)
        {
            var client = _httpClientFactory.CreateClient();
            client.BaseAddress = new Uri("https://localhost:5088");
            var response = await client.GetAsync($"/api/Statistic/?month={month}&year={year}");
            var body = await response.Content.ReadAsStringAsync();
            var users = JsonConvert.DeserializeObject<List<WorkhourStatistic>>(body);
            return users;
        }
    }
}