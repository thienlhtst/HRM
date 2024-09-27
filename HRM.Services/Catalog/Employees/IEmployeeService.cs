using HRM.ViewModel.Catalogs.Employees;
using HRM.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Dtos;
using HRM.ViewModel.Common;
using HRM.ViewModel.Catalogs.AllowanceRules;

namespace HRM.Services.Catalog.Employees
{
    public interface IEmployeeService
    {
        Task<int> Create(EmployeeCreateRequest request);

        Task<int> Update(EmployeeEditRequest request);

        Task<int> Delete(Guid EmployeeID);

        Task<EmployeeViewModel> GetById(Guid EmployeeID);

        Task<EmployeeEditRequest> GetByIdEdit(Guid EmployeeID);

        Task<PagedResult<EmployeeViewModel>> GetAllPage(GetEmployeePagingRequest request);

        Task<List<EmployeeViewModel>> GetByRankAndPosition(string SalaryID);

        Task<List<EmployeeInAllowanceRulesViewModel>> GetByAllowance(string AllowanceID);

        Task<PagedResult<EmployeeViewModel>> GetAllHomePage(GetEmployeePagingRequest request);

        Task<List<HRM.Entity.Entities.Employees>> GetList();

        Task<List<EmployeeViewModelHasSalaryID>> GetAllHasSalaryID();

        Task<PagedResult<EmployeeVMStatistic>> GetemployeeVMStatistics(GetEmployeePagingRequest request);

        Task<List<EmployeeHasAllowance>> GetEmployeeHasAllowance(string id);

        Task<EmployeeViewModelHasSalaryID> GetIdHaveSalary(Guid EmployeeID);
    }
}