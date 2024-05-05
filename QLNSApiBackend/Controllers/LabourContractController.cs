using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QLNS.DataAccess;
using QLNS.Entity.Entities;
using QLNS.Services.Catalog.LabourContract;
using QLNS.ViewModel.Catalogs.LabourContract;

namespace QLNSApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LabourContractController : ControllerBase
    {
        private readonly ILabourContractService _labourContractService;
        private readonly IMapper _mapper;
        private readonly QLNSDbContext _context;
        public LabourContractController(ILabourContractService labourContractService,IMapper mapper,QLNSDbContext context)
        {
            _labourContractService = labourContractService;
            _mapper = mapper;
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _labourContractService.GetList();
            var labour = _mapper.Map<List<LabourContractViewModel>>(model);
            return Ok(model);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LabourContractCreateRequest request)
        {
            var labour = _mapper.Map<LabourContract>(request);
            _context.LabourContracts.Add(labour);
            await _context.SaveChangesAsync();
            return Ok(labour);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(string id)
        {
            var labour = await _labourContractService.GetByID(id);
            return Ok(labour);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id,[FromBody] LabourContractEditRequest request)
        {
            request.ID = id;
            var lb = await _labourContractService.Update(request);
            return Ok(lb);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetAllPaging([FromQuery] GetLabourContractPagingRequest request)
        {
            var lb = await _labourContractService.GetAllPage(request);
            return Ok(lb);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var result = await _labourContractService.Delete(id);
            return Ok(result);
        }

    }
}
