using QLNS.ViewModel.Catalogs.LabourContract;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API
{
    public interface ILabourContractAPIService
    {
        Task<bool> Create(LabourContractCreateRequest request);
        Task<bool> Update(LabourContractEditRequest request);
        Task<bool> Delete(string id);
        Task<LabourContractViewModel> GetById(string id);
        Task<LabourContractEditRequest> GetByIdForEdit(string id);
        Task<PagedResult<LabourContractViewModel>> GetLabourPaging(GetLabourContractPaging request);
    }
}
