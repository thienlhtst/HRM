using AutoMapper;
using HRM.Entity.Entities;
using HRM.ViewModel.Catalogs.Allowance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Mapper
{
    public class AllowanceMapper : Profile
    {
        public AllowanceMapper() {
            CreateMap<Allowance, AllowanceViewModel>()
                .ForMember(
                destinationMember: dest => dest.ID,
                memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(
                destinationMember: dest => dest.Name,
                memberOptions: src => src.MapFrom(x => x.Name))
                .ForMember(
                destinationMember: dest => dest.Money,
                memberOptions:src => src.MapFrom(x => x.Money));

            CreateMap<AllowanceCreateRequest,Allowance>()
                .ForMember(
                destinationMember : dest => dest.ID,
                memberOptions : src => src.MapFrom(x=>x.ID))
                .ForMember(
                destinationMember: dest => dest.Name,
                memberOptions: src => src.MapFrom(x => x.Name))
                .ForMember(
                destinationMember: dest => dest.Money,
                memberOptions: src => src.MapFrom(x => x.Money));


            CreateMap<AllowanceEditRequest, Allowance>()
               .ForMember(
               destinationMember: dest => dest.ID,
               memberOptions: src => src.MapFrom(x => x.ID))
               .ForMember(
               destinationMember: dest => dest.Name,
               memberOptions: src => src.MapFrom(x => x.Name))
               .ForMember(
               destinationMember: dest => dest.Money,
               memberOptions: src => src.MapFrom(x => x.Money));
        }
    }
}
