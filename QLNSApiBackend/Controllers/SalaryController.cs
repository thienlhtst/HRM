using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public SalaryController(ISalaryService salaryService)
        {
            _salaryService = salaryService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _salaryService.GetList();
            return Ok(model);
        }

        [HttpGet("{salaryID}")]
        public async Task<IActionResult> GetById(string salaryID)
        {
            var salary = await _salaryService.GetById(salaryID);
            if (salary == null)
                return BadRequest("Cannot find Salary");
            return Ok(salary);
        }

        [HttpPost("createsalary")]
        public async Task<IActionResult> Create([FromBody] SalaryCreateRequest salaryCreateRequest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var salaryID = await _salaryService.Create(salaryCreateRequest);
            if (salaryID == 0)
            {
                return BadRequest(ModelState);
            }

            return Ok( salaryID );
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] SalaryEditRequest request)
        {
            request.ID = id;
            var salary = await _salaryService.Update(request);
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
    }
}