using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Employees;

namespace ApiChat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly ILogger<ChatController> _logger;
        private readonly QLNSDbContext _context;
        private readonly IHubContext<ChatHub> _hubContext;

        public ChatController(ILogger<ChatController> logger, QLNSDbContext context, IHubContext<ChatHub> hubContext)
        {
            _logger = logger;
            _hubContext = hubContext;
            _context = context;
        }

        [HttpGet("{employeeID}")]
        public async Task<IActionResult> Get(string employeeID)
        {
            string apiUrl = $"http://localhost:3333/api/Employee/{employeeID}";

            try
            {
                using (HttpClient client = new HttpClient())
                {
                    HttpResponseMessage response = await client.GetAsync(apiUrl);
                    response.EnsureSuccessStatusCode();
                    string responseBody = await response.Content.ReadAsStringAsync();
                    var employees = JsonConvert.DeserializeObject<EmployeeViewModel>(responseBody);
                    return Ok(employees);
                }
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Lỗi HTTP: {e.Message}");
                return StatusCode(500, $"Lỗi HTTP: {e.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Lỗi: {ex.Message}");
                return StatusCode(500, $"Lỗi: {ex.Message}");
            }
        }
        [HttpGet("Details/{idEmployee1}/{idEmployee2}")]
        public async Task<ActionResult<IEnumerable<ChatDetail>>> GetChatDetails(string idEmployee1, string idEmployee2)
        {
            return await _context.ChatDetail
                   .Where(x => x.IdEmployeeSendMes == idEmployee1 && x.IdEmployeeReceiveMes == idEmployee2 ||
                               x.IdEmployeeSendMes == idEmployee2 && x.IdEmployeeReceiveMes == idEmployee1)
                   .ToListAsync();
        }

        [HttpPost("SendMessage")]
        public async Task<IActionResult> SendMessage([FromBody] ChatDetail mes)
        {
            mes.Time = DateTime.Now;
            _context.ChatDetail.Add(mes);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.User(mes.IdEmployeeReceiveMes.ToString()).SendAsync("ReceiveMessage", mes.IdEmployeeSendMes, mes.Content);
            return Ok();
        }
    }
}