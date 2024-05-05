using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.Salary;
using QLNS.ViewModel.Catalogs.Salary;

using QLNS.ViewModel.Dtos;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalaryController : ControllerBase
    {
        private readonly ISalaryService _salaryService;
        private readonly IMapper _mapper;
        private readonly ILogger<SalaryController> _logger;
        private readonly QLNSDbContext _context;

        public SalaryController(ISalaryService salaryService,IMapper mapper,ILogger<SalaryController> logger,QLNSDbContext context)
        {
            _salaryService = salaryService;
            _mapper = mapper;
            _logger = logger;
            _context = context;
        }


        [HttpGet("Mapper")]
        public async Task<IActionResult> GetMapper()
        {
            var model = await _salaryService.GetList();
            var salary = _mapper.Map<SalaryViewModel>(model);
            return Ok(salary);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSalary([FromBody] SalaryCreateRequest request)
        {
            var newSalary = _mapper.Map<Salary>(request);
            _context.Salaries.Add(newSalary);
            await _context.SaveChangesAsync();
            return Ok(newSalary);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSalary(string id,[FromBody] SalaryEditRequest request)
        {
            request.ID = id;
            var newSalary = _mapper.Map<Salary>(request);
            _context.Salaries.Update(newSalary);
            return Ok(newSalary);
        }


        [HttpGet("{salaryID}")]
        public async Task<IActionResult> GetById(string salaryID)
        {
            var salary = await _salaryService.GetById(salaryID);
            if (salary == null)
                return BadRequest("Cannot find Salary");
            return Ok(salary);
        }


   

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var affectedResult = await _salaryService.Delete(id);
            if (affectedResult == 0)
                return BadRequest();
            return Ok(affectedResult);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPage([FromQuery] GetSalaryPagingRequest request)
        {
            var salary = await _salaryService.GetAllPage(request);
            return Ok(salary);
        }


        /*
          [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] SalaryEditRequest request)
        {
            request.ID = id;
            var salary = await _salaryService.Update(request);
            return Ok(salary);
        }
          
         */
    }
}