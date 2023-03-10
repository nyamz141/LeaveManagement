namespace LeaveRequests.Data.API.Model.Responses
{
    public class UpdateLeaveRequest
    {
        public string Id { get; set; }
        public string leaveReason { get; set; }
        public string daysRequested { get; set; }
    }
}
