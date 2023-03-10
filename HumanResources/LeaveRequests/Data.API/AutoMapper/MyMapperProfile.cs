using AutoMapper;
using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;

namespace LeaveRequests.Data.API.AutoMapper
{
    public class MyMapperProfile: Profile
    {
        public MyMapperProfile()
        {
            CreateMap<SimpleLeaveRequest, SimpleLeaveRequestDto>();
            CreateMap<SimpleLeaveRequestDto, SimpleLeaveRequest>();

            CreateMap<RequestResponse, RequestResponseDto>();
            CreateMap<RequestResponseDto, RequestResponse>();

            CreateMap<UpdateLeaveRequestDto, UpdateLeaveRequest>();
            CreateMap<UpdateLeaveRequest, UpdateLeaveRequestDto>();
        }
    }
}
