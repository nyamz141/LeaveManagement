using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;

namespace LeaveRequests.Data.API.Utilities
{
    public interface IGlobalUtilities
    {
        public SimpleLeaveRequestDto packageNewRequestUserInput(Dictionary<string, string> input);
        public UpdateLeaveRequestDto packageUpdateRequestUserInput(Dictionary<string, string> input);
    }
}
