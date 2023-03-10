namespace LeaveRequests.Data.API.Model
{
    public class SimpleLeaveRequestDto
    {
        public string Id { get; set; }
        public string employeeName { get; set; }
        public string employeeId { get; set; }
        public string leaveReason { get; set;}
        public string daysRequested { get; set; }
        public string requestStatus { get; set; }
        public string requestDate { get; set; }
    }
}
