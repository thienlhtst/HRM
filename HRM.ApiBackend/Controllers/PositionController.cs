﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HRM.DataAccess;
using HRM.Entity.Entities;
using HRM.Services.Catalog.Positions;
using HRM.ViewModel.Catalogs.Position;

namespace HRM.BackendApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private readonly IManagePositionService _managePositionService;
        private readonly IMapper _mapper;

        private readonly HRMDbContext _context;

        public PositionController(IManagePositionService managePositionService, IMapper Mapper, HRMDbContext context)
        {
            _managePositionService = managePositionService;
            _mapper = Mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var model = await _managePositionService.GetAll();
            var position = _mapper.Map<List<PositionViewModel>>(model);
            return Ok(position);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] PositionCreateRequest request)
        {
            var newPosi = await _managePositionService.Create(request);
            return Ok(newPosi);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] PositionUpdateRequest request)
        {
            request.ID = id;
            var newPosi = await _managePositionService.Update(request);
            return Ok(newPosi);
        }

        [HttpGet("paging")]
        public async Task<IActionResult> GetPaging([FromQuery] GetPositionPagingRequest request)
        {
            var days = await _managePositionService.GetAllPaging(request);
            return Ok(days);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByID(int id)
        {
            var day = await _managePositionService.GetByID(id);
            if (day == null)
                return BadRequest("Cannot find Position");
            return Ok(day);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _managePositionService.DeletePositionByProceDure(id);
            return Ok();
        }

        /*

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var days = await _managePositionService.GetAll();
            return Ok(days);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id,[FromBody] PositionUpdateRequest request)
        {
            request.ID = id;
            var affectedResult = await _managePositionService.Update(request);
            if (affectedResult == 0)
                return BadRequest();
            return Ok(affectedResult);
        }
        [HttpPost("createposition")]
        public async Task<IActionResult> Create([FromBody] PositionCreateRequest request)
        {
            var position = await _managePositionService.Create(request);
            return Ok( position);
        }

         */
    }
}