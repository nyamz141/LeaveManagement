using LeaveRequests.Data.API.Model.Responses;
using LeaveRequests.Data.API.Model;

namespace LeaveRequests.Data.API.UserAccessModules
{
    public interface IUserAccessLayer
    {
        public Task<RequestResponse> registerNewLeaveRequest(Dictionary<string, string> userinput);
        public Task<RequestResponse> modifyLeaveRequest(Dictionary<string, string> userinput);
        public string purgeLeaveRequest(Dictionary<string, string> userinput);
        public List<SimpleLeaveRequest> fetchEmployeeLeaveRequests(Dictionary<string, string> userinput);
    }
}
