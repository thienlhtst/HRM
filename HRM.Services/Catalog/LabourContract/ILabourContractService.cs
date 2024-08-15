using Microsoft.AspNetCore.Mvc.RazorPages;
using HRM.ViewModel.Catalogs.LabourContract;
using HRM.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.Services.Catalog.LabourContract
{
    public interface ILabourContractService
    {
        Task<int> Create(LabourContractCreateRequest request);

        Task<int> Update(LabourContractEditRequest request);

        Task<int> Delete(string labourId);

        Task<LabourContractViewModel> GetByID(string labourID);

        Task<List<LabourContractViewModel>> GetByIDEmployee(string EmployeeID);

        Task<PagedResult<LabourContractViewModel>> GetAllPage(GetLabourContractPagingRequest request);

        Task<List<LabourContractViewModel>> GetList();
    }
}