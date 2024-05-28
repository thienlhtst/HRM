using Microsoft.AspNetCore.Mvc.RazorPages;
using QLNS.ViewModel.Catalogs.LabourContract;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.LabourContract
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