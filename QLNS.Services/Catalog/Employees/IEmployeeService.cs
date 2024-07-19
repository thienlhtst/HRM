using QLNS.ViewModel.Catalogs.Employees;
using QLNS.Entity.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Dtos;
using QLNS.ViewModel.Common;
using QLNS.ViewModel.Catalogs.AllowanceRules;
using QLNS.ViewModel.Catalogs.Chat;

namespace QLNS.Services.Catalog.Employees
{
    public interface IEmployeeService
    {
        Task<int> Create(EmployeeCreateRequest request);

        Task<int> Update(EmployeeEditRequest request);

        Task<int> Delete(string EmployeeID);

        Task<EmployeeViewModel> GetById(string EmployeeID);

        Task<EmployeeEditRequest> GetByIdEdit(string EmployeeID);

        Task<PagedResult<EmployeeViewModel>> GetAllPage(GetEmployeePagingRequest request);

        Task<List<EmployeeViewModel>> GetByRankAndPosition(string SalaryID);

        Task<List<EmployeeInAllowanceRulesViewModel>> GetByAllowance(string AllowanceID);

        Task<PagedResult<EmployeeViewModel>> GetAllHomePage(GetEmployeePagingRequest request);

        Task<List<QLNS.Entity.Entities.Employees>> GetList();

        Task<List<EmployeeViewModelHasSalaryID>> GetAllHasSalaryID();

        Task<PagedResult<EmployeeVMStatistic>> GetemployeeVMStatistics(GetEmployeePagingRequest request);

        Task<List<EmployeeHasAllowance>> GetEmployeeHasAllowance(string id);


    }
}