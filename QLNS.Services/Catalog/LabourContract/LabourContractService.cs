using Microsoft.EntityFrameworkCore;
using QLNS.DataAccess;
using QLNS.ViewModel.Catalogs.LabourContract;
using QLNS.ViewModel.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.Services.Catalog.LabourContract
{
    public class LabourContractService : ILabourContractService
    {
        private readonly QLNSDbContext _context;

        public LabourContractService(QLNSDbContext context)
        {
            _context = context;
        }

        public async Task<int> Create(LabourContractCreateRequest request)
        {
            var lb = new QLNS.Entity.Entities.LabourContract()
            {
                ID = request.ID,
                EmployeeID = request.EmployeeID,
                Content = request.Content,
                ContractSigninDate = request.ContractSigninDate,
                ContractTerm = request.ContractTerm,
                Active = request.Active
            };
            _context.LabourContracts.Add(lb);
            await _context.SaveChangesAsync();
            return Convert.ToInt32(lb.ID);
        }

        public async Task<int> Delete(string labourId)
        {
            var lb = await _context.LabourContracts.FindAsync(labourId);
            _context.LabourContracts.Remove(lb);
            return await _context.SaveChangesAsync();
        }

        public async Task<PagedResult<LabourContractViewModel>> GetAllPage(GetLabourContractPagingRequest request)
        {
            var query = from p in _context.LabourContracts
                        join pt in _context.Employee on p.EmployeeID equals pt.ID
                        select new { p, pt };

            if (!string.IsNullOrEmpty(request.Keyword))
            {
                query = query.Where(x => x.p.ID.Contains(request.Keyword));
            }
            int totalRow = await query.CountAsync();

            var data = await query.OrderBy(x => Convert.ToInt32(x.p.ID)).Skip((request.PageIndex - 1) * request.PageSize)
                    .Take(request.PageSize)
                    .Select(x => new LabourContractViewModel()
                    {
                        ID = x.p.ID,
                        EmployeeID = x.pt.FirstName + " " + x.pt.MiddleName + " " + x.pt.LastName,
                        Content = x.p.Content,
                        ContractSigninDate = x.p.ContractSigninDate.Date.ToString(),
                        Active = x.p.Active,
                        ContractTerm = x.p.ContractTerm
                    }).ToListAsync();

            var pagedView = new PagedResult<LabourContractViewModel>()
            {
                TotalRecords = totalRow,
                PageIndex = request.PageIndex,
                PageSize = request.PageSize,
                Items = data
            };
            return pagedView;
        }

        public async Task<LabourContractViewModel> GetByID(string labourID)
        {
            var employeeID = (from p in _context.LabourContracts
                              join pt in _context.Employee on p.EmployeeID equals pt.ID
                              where p.ID == labourID
                              select pt.FirstName + " " + pt.MiddleName + " " + pt.MiddleName).First();
            var lbct = await _context.LabourContracts.FindAsync(labourID);
            var lb = new LabourContractViewModel()
            {
                ID = lbct.ID,
                EmployeeID = employeeID,
                Content = lbct.Content,
                ContractSigninDate = lbct.ContractSigninDate.Date.ToString(),
                Active = lbct.Active,
                ContractTerm = lbct.ContractTerm
            };
            return lb;
        }

        public async Task<List<LabourContractViewModel>> GetByIDEmployee(string EmployeeID)
        {
            var query = from p in _context.LabourContracts
                        where p.EmployeeID == EmployeeID
                        select new { p };
            var lb = await query.Select(x => new LabourContractViewModel()
            {
                ID = x.p.ID,
                EmployeeID = x.p.EmployeeID,
                Content = x.p.Content,
                ContractSigninDate = x.p.ContractSigninDate.Date.ToString(),
                Active = x.p.Active,
                ContractTerm = x.p.ContractTerm
            }).ToListAsync();
            return lb;
        }

        public async Task<List<LabourContractViewModel>> GetList()
        {
            var query = from p in _context.LabourContracts select p;
            var data = await query.Select(x => new LabourContractViewModel()
            {
                ID = x.ID,
                EmployeeID = x.EmployeeID,
                Content = x.Content,
                ContractSigninDate = x.ContractSigninDate.Date.ToString(),
                ContractTerm = x.ContractTerm,
                Active = x.Active
            }).ToListAsync();
            return data;
        }

        public async Task<int> Update(LabourContractEditRequest request)
        {
            var lb = await _context.LabourContracts.FindAsync(request.ID);
            if (lb == null) return 0;
            lb.ID = request.ID;
            lb.EmployeeID = request.EmployeeID;
            lb.Content = request.Content;
            lb.ContractSigninDate = request.ContractSigninDate;
            lb.ContractTerm = request.ContractTerm;
            lb.Active = request.Active;
            _context.LabourContracts.Update(lb);
            return await _context.SaveChangesAsync();
        }
    }
}