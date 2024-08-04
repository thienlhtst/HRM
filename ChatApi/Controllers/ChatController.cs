
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

using QLNS.ViewModel.Catalogs.Employees;

namespace ChatApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly ILogger<ChatController> _logger;
        private readonly QLNSDbContext _context;
        private readonly IHubContext<ChatHub> _hubContext;
        private readonly IEmployeeService _employeeService;

        public ChatController(ILogger<ChatController> logger, QLNSDbContext context, IHubContext<ChatHub> hubContext)
        {
            _logger = logger;
            _hubContext = hubContext;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<SendChatDetail>> CreateChatDetail(SendChatDetail chatDetail)
        {
            var chatDe = new ChatDetail
            {
                Id = chatDetail.Id,
                IdChat = chatDetail.IdChat,
                IdEmployee = chatDetail.IdEmployee,
                Content = chatDetail.Content,
                Time = chatDetail.Time,

            };
            _context.ChatDetail.Add(chatDe);
            await _context.SaveChangesAsync();

            await _hubContext.Clients.Group(chatDetail.IdChat.ToString()).SendAsync("ReceiveMessage", chatDetail.IdEmployee, chatDetail.Content);

            return CreatedAtAction(nameof(GetChatDetails), new { chatId = chatDetail.IdChat }, chatDetail);
        }

        [HttpGet("{chatId}")]
        public async Task<ActionResult<IEnumerable<ChatDetail>>> GetChatDetails(string chatId)
        {
            return await _context.ChatDetail.Where(cd => cd.IdChat == chatId).ToListAsync();
        }


    }
}