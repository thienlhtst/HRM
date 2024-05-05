using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Employees;
using QLNS.ViewModel.Catalogs.Employees;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;
        private readonly QLNSDbContext _context;

        public EmployeeController(IEmployeeService employeeService, IMapper mapper, QLNSDbContext context)
        {
            _employeeService = employeeService;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet("estatisticpaging")]
        public async Task<IActionResult> Get([FromQuery] GetEmployeePagingRequest request)
        {
            var model = await _employeeService.GetemployeeVMStatistics(request);
            return Ok(model);
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _employeeService.GetAllHasSalaryID();
            var emp = _mapper.Map<List<EmployeeViewModelHasSalaryID>>(model);
            return Ok(emp);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee([FromBody] EmployeeCreateRequest request)
        {
            var newEmployee = await _employeeService.Create(request);
            return Ok(newEmployee);
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

        [HttpGet("GetAllowanceByEmployee/{id}")]
        public async Task<IActionResult> GetAllowanceByEmployeeID(string id)
        {
            var employee = await _employeeService.GetEmployeeHasAllowance(id);
            return Ok(employee);
        }
    }
}