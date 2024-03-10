using Azure.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using QLNS.Services.Catalog.WorkHour;
using QLNS.ViewModel.Catalogs.WorkHour;
using QLNSApiBackend.Hub;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkHourController : ControllerBase
    {
        private readonly IWorkHourService _workHourService;
        private IHubContext<SignalrHub, IHubClient> _signalrHub;

        public WorkHourController(IWorkHourService workHourService, IHubContext<SignalrHub, IHubClient> signalrHub)
        {
            _workHourService = workHourService;
            _signalrHub = signalrHub;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _workHourService.GetList();
            return Ok(data);
        }

        [HttpGet("{ID}")]
        public async Task<IActionResult> GetByID(int ID)
        {
            var model = await _workHourService.GetById(ID);
            if (model == null)
                return BadRequest("Cannot find product");
            return Ok(model);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Create([FromBody] WorkHourCreateRequest model)
        {
            var result = await _workHourService.Create(model);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Checkin([FromBody] CheckinModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _workHourService.Checkin(model);
            RealtimeWH request = new RealtimeWH()
            {
                EmployeesID= model.EmployeesID,
                flag=1,
                Day= model.Day,
                Month= model.Month,
                Year= model.Year,
                Hour= model.HourCheckin,
                Minute= model.MinuteCheckin,
            };
            await _signalrHub.Clients.All.BroadcastMessage(request);
            return Ok(result);
        }

        [HttpPut("checkout")]
        public async Task<IActionResult> Checkout([FromBody] CheckoutModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var result = await _workHourService.Checkout(model);
            RealtimeWH request = new RealtimeWH()
            {
                EmployeesID= model.EmployeesID,
                flag=2,
                Day= model.Day,
                Month= model.Month,
                Year= model.Year,
                Hour= model.HourCheckout,
                Minute= model.MinuteCheckout,
            };
            await _signalrHub.Clients.All.BroadcastMessage(request);
            return Ok(result);
        }

        [HttpPut("{ID}")]
        public async Task<IActionResult> UpdateAll([FromRoute] int ID, [FromBody] WorkHourUpdateRequest model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            model.ID = ID;
            var result = await _workHourService.UpdateAll(model);
            return Ok(result);
        }

        [HttpDelete("{ID}")]
        public async Task<IActionResult> Delete(int ID)
        {
            var affectedResult = await _workHourService.Delete(ID);
            if (affectedResult == 0)
                return BadRequest();
            return Ok();
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllpage([FromQuery] GetWorkHourAllPage getWorkHourAllPage)
        {
            var workhour = await _workHourService.GetAllPage(getWorkHourAllPage);

            return Ok(workhour);
        }

        [HttpGet("paginghome")]
        public async Task<IActionResult> GetAllHome([FromQuery] GetWorkHourAllPage getWorkHourAllPage)
        {
            var workhour = await _workHourService.GetAllHome(getWorkHourAllPage);
            return Ok(workhour);
        }
    }
}