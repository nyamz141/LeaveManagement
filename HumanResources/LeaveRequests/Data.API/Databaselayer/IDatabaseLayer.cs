using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;

namespace LeaveRequests.Data.API.Databaselayer
{
    public interface IDatabaseLayer
    {
        public Task<RequestResponseDto> createNewLeaveRequest(SimpleLeaveRequestDto request);
        public Task<RequestResponseDto> updateLeaverequest(UpdateLeaveRequestDto update);
        public string deleteLeaveRequest(string requestId);
        public List<SimpleLeaveRequestDto> retrieveLeaveRequest(string employeeID);
    }
}
