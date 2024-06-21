using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QLNS.ViewModel.Catalogs.Employees;

namespace ApiChat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly ILogger<ChatController> _logger;

        public ChatController(ILogger<ChatController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            string ApiUrl = "http://localhost:3333/api/Employee";

            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(ApiUrl);
                    response.EnsureSuccessStatusCode();
                    string responseBody = await response.Content.ReadAsStringAsync();
                    var employees = JsonConvert.DeserializeObject<List<EmployeeViewModelHasSalaryID>>(responseBody);
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