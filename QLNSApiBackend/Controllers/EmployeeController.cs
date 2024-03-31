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

        [HttpGet("estatisticpaging")]
        public async Task<IActionResult> Get([FromQuery] GetEmployeePagingRequest request)
        {
            var model = await _employeeService.GetemployeeVMStatistics(request);
            return Ok(model);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var model = await _employeeService.GetList();
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

        [HttpGet("bypositionandrank/{salaryID}")]
        public async Task<IActionResult> GetEmployeeBySalary(string salaryID)
        {
            var employee = await _employeeService.GetByRankAndPosition(salaryID);
            return Ok(employee);
        }

        [HttpGet("byallowance/{allowanceID}")]
        public async Task<IActionResult> GetEmployeeByAllowance(string allowanceID)
        {
            var employee = await _employeeService.GetByAllowance(allowanceID);
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
            return Ok(employeeID);
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
            return Ok(emp);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetEmployeePagingRequest request)
        {
            var employees = await _employeeService.GetAllPage(request);
            return Ok(employees);
        }

        [HttpGet("paginghome")]
        public async Task<IActionResult> GetAllHomePaging([FromQuery] GetEmployeePagingRequest request)
        {
            var employees = await _employeeService.GetAllHomePage(request);
            return Ok(employees);
        }
    }
}