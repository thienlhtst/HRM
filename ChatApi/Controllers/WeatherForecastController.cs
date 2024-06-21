using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using QLNS.ViewModel.Catalogs.Employees;

namespace Chatttttt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public async Task<IActionResult> Get()
        {
            string api = "http://localhost:3333/api/Employee";
            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(api);

                    // Đảm bảo yêu cầu thành công
                    response.EnsureSuccessStatusCode();

                    // Đọc dữ liệu từ phản hồi
                    string responseBody = await response.Content.ReadAsStringAsync();
                    var employees = JsonConvert.DeserializeObject<EmployeeViewModelHasSalaryID>(responseBody);

                    return Ok(employees);
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Lỗi HTTP: {e.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi: {ex.Message}");
            }
            return null;
        }
    }
}