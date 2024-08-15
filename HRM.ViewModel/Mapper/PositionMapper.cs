using AutoMapper;
using HRM.Entity.Entities;
using HRM.ViewModel.Catalogs.Position;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HRM.ViewModel.Mapper
{
    public class PositionMapper : Profile
    {
        public PositionMapper() {
            CreateMap<Position, PositionViewModel>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.Name,
                            memberOptions: src => src.MapFrom(x => x.Name));
                
            CreateMap<PositionCreateRequest,Position>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.Name,
                            memberOptions: src => src.MapFrom(x => x.Name));
            CreateMap<PositionUpdateRequest,Position>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.Name,
                            memberOptions: src => src.MapFrom(x => x.Name));

        }
    }
}
