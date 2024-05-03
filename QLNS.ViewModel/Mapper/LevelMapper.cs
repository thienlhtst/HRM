using AutoMapper;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Levels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Mapper
{
    public class LevelMapper : Profile
    {
        public LevelMapper() {
            CreateMap<Level, LevelViewModel>()
                .ForMember(destinationMember : dest => dest.ID,
                            memberOptions:src => src.MapFrom(x=>x.ID))
                .ForMember(destinationMember: dest => dest.Name,
                            memberOptions: src => src.MapFrom(x=>x.Name))
                .ForMember(destinationMember : dest => dest.RoleID,
                            memberOptions : src => src.MapFrom(x=>x.RoleID));

            CreateMap<LevelCreateRequest,Level>()
                 .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.Name,
                            memberOptions: src => src.MapFrom(x => x.Name))
                .ForMember(destinationMember: dest => dest.RoleID,
                            memberOptions: src => src.MapFrom(x => x.RoleID));
            CreateMap<LevelEditRequest, Level>()
                .ForMember(destinationMember: dest => dest.ID,
                           memberOptions: src => src.MapFrom(x => x.ID))
               .ForMember(destinationMember: dest => dest.Name,
                           memberOptions: src => src.MapFrom(x => x.Name))
               .ForMember(destinationMember: dest => dest.RoleID,
                           memberOptions: src => src.MapFrom(x => x.RoleID));
        }
    }
}
