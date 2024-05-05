using AutoMapper;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Salary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Mapper
{
    public class SalaryMapper : Profile
    {
        public SalaryMapper()
        {
            CreateMap<Salary, SalaryViewModel>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.LevelID,
                            memberOptions: src => src.MapFrom(x => x.LevelID))
                .ForMember(destinationMember: dest => dest.PositionID,
                            memberOptions: src => src.MapFrom(x => x.PositionID))
                .ForMember(destinationMember: dest => dest.Money,
                            memberOptions: src => src.MapFrom(x => x.Money));


            CreateMap<SalaryCreateRequest, Salary>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.LevelID,
                            memberOptions: src => src.MapFrom(x => x.LevelID))
                .ForMember(destinationMember: dest => dest.PositionID,
                            memberOptions: src => src.MapFrom(x => x.PositionID))
                .ForMember(destinationMember: dest => dest.Money,
                            memberOptions: src => src.MapFrom(x => x.Money)); 
            
            
            CreateMap<SalaryEditRequest, Salary>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.LevelID,
                            memberOptions: src => src.MapFrom(x => x.LevelID))
                .ForMember(destinationMember: dest => dest.PositionID,
                            memberOptions: src => src.MapFrom(x => x.PositionID))
                .ForMember(destinationMember: dest => dest.Money,
                            memberOptions: src => src.MapFrom(x => x.Money));

        }
    }
}
