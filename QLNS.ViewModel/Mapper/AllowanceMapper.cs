using AutoMapper;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Allowance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Mapper
{
    public class AllowanceMapper : Profile
    {
        public AllowanceMapper() {
            CreateMap<Allowance, GetAllowanceResponse>()
                .ForMember(
                destinationMember: dest => dest.ID,
                memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(
                destinationMember: dest => dest.Name,
                memberOptions: src => src.MapFrom(x => x.Name))
                .ForMember(
                destinationMember: dest => dest.Money,
                memberOptions:src => src.MapFrom(x => x.Money));

        
        }
    }
}
