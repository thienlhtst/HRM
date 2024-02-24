using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using QLNS.Services.Catalog.Employees;
using QLNS.ViewModel.Catalogs.Employees;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _employeeService.GetemployeeVMStatistics();
            return Ok(model);
        }

        [HttpGet("{employeeID}")]
        public async Task<IActionResult> GetById(string employeeID)
        {
            var employee = await _employeeService.GetById(employeeID);
            if (employee == null)
                return BadRequest("Cannot find Employee");
            return Ok(employee);
        }

        [HttpGet("edit/{employeeID}")]
        public async Task<IActionResult> GetByIdEdit(string employeeID)
        {
            var employee = await _employeeService.GetByIdEdit(employeeID);
            if (employee == null)
                return BadRequest("Cannot find Employee");
            return Ok(employee);
        }

        [HttpPost("createemployee")]
        public async Task<IActionResult> Create([FromBody] EmployeeCreateRequest employeeCreateRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var employeeID = await _employeeService.Create(employeeCreateRequest);
            if (employeeID == 0)
            {
                return BadRequest(ModelState);
            }
            // var employee = await _employeeService.GetById(employeeCreateRequest.ID);
            // return CreatedAtAction(nameof(GetById), new { id = employeeID }, employee);
            return Ok(new { token = employeeID });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] EmployeeEditRequest request)
        {
            request.ID = id;
            var employee = await _employeeService.Update(request);
            return Ok(employee);
        }

        [HttpDelete("{employeeID}")]
        public async Task<IActionResult> Delete(string employeeID)
        {
            var emp = await _employeeService.Delete(employeeID);
            return Ok();
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetEmployeePagingRequest request)
        {
            var employees = await _employeeService.GetAllPage(request);
            return Ok(employees);
        }
    }
}