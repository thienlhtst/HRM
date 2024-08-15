using AutoMapper;
using HRM.Entity.Entities;
using HRM.ViewModel.Catalogs.LabourContract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Mapper
{


    public class LabourContractMapper : Profile
    {
        public LabourContractMapper() {
            CreateMap<LabourContract, LabourContractViewModel>()
                 .ForMember(destinationMember: dest => dest.ID,
                             memberOptions: src => src.MapFrom(x => x.ID))
                 .ForMember(destinationMember: dest => dest.EmployeeID,
                             memberOptions: src => src.MapFrom(x => x.EmployeeID))
                 .ForMember(destinationMember: dest => dest.Content,
                             memberOptions: src => src.MapFrom(x => x.Content))
                 .ForMember(destinationMember: dest => dest.ContractSigninDate,
                             memberOptions: src => src.MapFrom(x => x.ContractSigninDate))
                 .ForMember(destinationMember: dest => dest.ContractTerm,
                             memberOptions: src => src.MapFrom(x => x.ContractTerm))
                 .ForMember(destinationMember: dest => dest.Active,
                             memberOptions: src => src.MapFrom(x => x.Active));


            CreateMap<LabourContractCreateRequest, LabourContract>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.EmployeeID,
                            memberOptions: src => src.MapFrom(x => x.EmployeeID))
                .ForMember(destinationMember: dest => dest.Content,
                            memberOptions: src => src.MapFrom(x => x.Content))
                .ForMember(destinationMember: dest => dest.ContractSigninDate,
                            memberOptions: src => src.MapFrom(x => x.ContractSigninDate))
                .ForMember(destinationMember: dest => dest.ContractTerm,
                            memberOptions: src => src.MapFrom(x => x.ContractTerm))
                .ForMember(destinationMember: dest => dest.Active,
                            memberOptions: src => src.MapFrom(x => x.Active));


            CreateMap<LabourContractEditRequest, LabourContract>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.EmployeeID,
                            memberOptions: src => src.MapFrom(x => x.EmployeeID))
                .ForMember(destinationMember: dest => dest.Content,
                            memberOptions: src => src.MapFrom(x => x.Content))
                .ForMember(destinationMember: dest => dest.ContractSigninDate,
                            memberOptions: src => src.MapFrom(x => x.ContractSigninDate))
                .ForMember(destinationMember: dest => dest.ContractTerm,
                            memberOptions: src => src.MapFrom(x => x.ContractTerm))
                .ForMember(destinationMember: dest => dest.Active,
                            memberOptions: src => src.MapFrom(x => x.Active));


        }
    }
}
