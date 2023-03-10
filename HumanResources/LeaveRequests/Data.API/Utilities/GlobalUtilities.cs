using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;
using System;

namespace LeaveRequests.Data.API.Utilities
{
    public class GlobalUtilities : IGlobalUtilities
    {
        private string getCurrentDateandTime()
        {
            return DateTime.Now.ToString("dddd, dd MMMM yyyy HH:mm:ss");
        }

        private string generateNewRequestID()
        {
            return Guid.NewGuid().ToString();
        }

        private string generateEmployeeID()
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, 10).Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public SimpleLeaveRequestDto packageNewRequestUserInput(Dictionary<string, string> input)
        {
            return new SimpleLeaveRequestDto()
            {
                Id = generateNewRequestID(),
                employeeName = input["employeeName"],
                employeeId = input["employeeId"],
                leaveReason = input["leaveReason"],
                daysRequested = input["daysRequested"],
                requestStatus = "Pending",
                requestDate = getCurrentDateandTime()
            };
        }

        public UpdateLeaveRequestDto packageUpdateRequestUserInput(Dictionary<string, string> input)
        {
            return new UpdateLeaveRequestDto()
            {
                Id = input["requestId"],
                leaveReason = input["leaveReason"],
                daysRequested = input["daysRequested"]
            };
        }
    }
}