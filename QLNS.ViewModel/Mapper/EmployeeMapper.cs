using AutoMapper;
using QLNS.Entity.Entities;
using QLNS.ViewModel.Catalogs.Employees;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QLNS.ViewModel.Mapper
{

    /*
     ublic DateTime DOB { get; set; }
        public Sex Sex { get; set; }
        public string CIC { get; set; }
        public string NumberPhone { get; set; }
        public string Address { get; set; }
        public string SalaryID { get; set; }
        public string Account { get; set; }
        public string Password { get; set; }
        public Active Active { get; set; }
        public string URLImage { get; set; } 
     
     */
    public class EmployeeMapper : Profile
    {
        public EmployeeMapper() {
            CreateMap<Employees, EmployeeViewModelHasSalaryID>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.FirstName,
                            memberOptions: src => src.MapFrom(x => x.FirstName))
                .ForMember(destinationMember: dest => dest.MiddleName,
                            memberOptions: src => src.MapFrom(x => x.MiddleName))
                .ForMember(destinationMember: dest => dest.LastName,
                            memberOptions: src => src.MapFrom(x => x.LastName))
                .ForMember(destinationMember: dest => dest.DOB,
                            memberOptions: src => src.MapFrom(x => x.DOB))
                .ForMember(destinationMember: dest => dest.CIC,
                            memberOptions: src => src.MapFrom(x => x.CIC))
                .ForMember(destinationMember: dest => dest.NumberPhone,
                            memberOptions: src => src.MapFrom(x => x.NumberPhone))
                .ForMember(destinationMember: dest => dest.Address,
                            memberOptions: src => src.MapFrom(x => x.Address))
                .ForMember(destinationMember: dest => dest.SalaryID,
                            memberOptions: src => src.MapFrom(x => x.SalaryID))
                .ForMember(destinationMember: dest => dest.Account,
                            memberOptions: src => src.MapFrom(x => x.Account))
                .ForMember(destinationMember: dest => dest.Password,
                            memberOptions: src => src.MapFrom(x => x.Password))
                .ForMember(destinationMember: dest => dest.Active,
                            memberOptions: src => src.MapFrom(x => x.Active))
                .ForMember(destinationMember: dest => dest.URLImage,
                            memberOptions: src => src.MapFrom(x => x.URLImage));


            CreateMap<EmployeeCreateRequest, Employees>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.FirstName,
                            memberOptions: src => src.MapFrom(x => x.FirstName))
                .ForMember(destinationMember: dest => dest.MiddleName,
                            memberOptions: src => src.MapFrom(x => x.MiddleName))
                .ForMember(destinationMember: dest => dest.LastName,
                            memberOptions: src => src.MapFrom(x => x.LastName))
                .ForMember(destinationMember: dest => dest.DOB,
                            memberOptions: src => src.MapFrom(x => x.DOB))
                .ForMember(destinationMember: dest => dest.CIC,
                            memberOptions: src => src.MapFrom(x => x.CIC))
                .ForMember(destinationMember: dest => dest.NumberPhone,
                            memberOptions: src => src.MapFrom(x => x.NumberPhone))
                .ForMember(destinationMember: dest => dest.Address,
                            memberOptions: src => src.MapFrom(x => x.Address))
                .ForMember(destinationMember: dest => dest.SalaryID,
                            memberOptions: src => src.MapFrom(x => x.SalaryID))
                .ForMember(destinationMember: dest => dest.Account,
                            memberOptions: src => src.MapFrom(x => x.Account))
                .ForMember(destinationMember: dest => dest.Password,
                            memberOptions: src => src.MapFrom(x => x.Password))
                .ForMember(destinationMember: dest => dest.Active,
                            memberOptions: src => src.MapFrom(x => x.Active))
                .ForMember(destinationMember: dest => dest.URLImage,
                            memberOptions: src => src.MapFrom(x => x.URLImage));



            CreateMap<EmployeeEditRequest, Employees>()
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.ID,
                            memberOptions: src => src.MapFrom(x => x.ID))
                .ForMember(destinationMember: dest => dest.FirstName,
                            memberOptions: src => src.MapFrom(x => x.FirstName))
                .ForMember(destinationMember: dest => dest.MiddleName,
                            memberOptions: src => src.MapFrom(x => x.MiddleName))
                .ForMember(destinationMember: dest => dest.LastName,
                            memberOptions: src => src.MapFrom(x => x.LastName))
                .ForMember(destinationMember: dest => dest.DOB,
                            memberOptions: src => src.MapFrom(x => x.DOB))
                .ForMember(destinationMember: dest => dest.CIC,
                            memberOptions: src => src.MapFrom(x => x.CIC))
                .ForMember(destinationMember: dest => dest.NumberPhone,
                            memberOptions: src => src.MapFrom(x => x.NumberPhone))
                .ForMember(destinationMember: dest => dest.Address,
                            memberOptions: src => src.MapFrom(x => x.Address))
                .ForMember(destinationMember: dest => dest.SalaryID,
                            memberOptions: src => src.MapFrom(x => x.SalaryID))
                .ForMember(destinationMember: dest => dest.Account,
                            memberOptions: src => src.MapFrom(x => x.Account))
                .ForMember(destinationMember: dest => dest.Password,
                            memberOptions: src => src.MapFrom(x => x.Password))
                .ForMember(destinationMember: dest => dest.Active,
                            memberOptions: src => src.MapFrom(x => x.Active))
                .ForMember(destinationMember: dest => dest.URLImage,
                            memberOptions: src => src.MapFrom(x => x.URLImage));

        }
    }
}
