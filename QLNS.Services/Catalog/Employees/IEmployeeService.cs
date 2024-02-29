using QLNS.ViewModel.Catalogs.Employees;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.Services.Catalog.Positions.Dtos;
using QLNS.ViewModel.Dtos;
using QLNS.ViewModel.Common;

namespace QLNS.Services.Catalog.Employees
{
    public interface IEmployeeService
    {
        Task<int> Create(EmployeeCreateRequest request);

        Task<int> Update(EmployeeEditRequest request);

        Task<int> Delete(string EmployeeID);

        Task<EmployeeViewModel> GetById(string EmployeeID);

        Task<EmployeeEditRequest> GetByIdEdit(string EmployeeID);

        Task<IEnumerable<Entity.Entities.Employees>> GetAll();

        Task<PagedResult<EmployeeViewModel>> GetAllPage(GetEmployeePagingRequest request);

        Task<PagedResult<EmployeeViewModel>> GetAllHomePage(GetEmployeePagingRequest request);

        Task<List<QLNS.Entity.Entities.Employees>> GetList();

        Task<PagedResult<EmployeeVMStatistic>> GetemployeeVMStatistics(GetEmployeePagingRequest request);
    }
}