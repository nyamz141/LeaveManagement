using LeaveRequests.Data.API.Context;
using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;

namespace LeaveRequests.Data.API.Databaselayer
{
    public class DatabaseLayer : IDatabaseLayer
    {
        private readonly LeaveRequestsContext _context;

        public DatabaseLayer(LeaveRequestsContext context)
        {
            _context = context;
        }

        public async Task<RequestResponseDto> createNewLeaveRequest(SimpleLeaveRequestDto request)
        {
            await _context.Requests.AddAsync(request);
            _context.SaveChanges();
            return new RequestResponseDto()
            {
                Id = request.Id,
                requestStatus = "Pending",
                requestDate = request.requestDate
            };
        }

        public string deleteLeaveRequest(string requestId)
        {
            var request = _context.Requests.FirstOrDefault(p => p.Id == requestId);
            _context.Requests.Remove(request);
            _context.SaveChanges();
            return $"Request: {requestId} has been removed from the system";
        }

        public List<SimpleLeaveRequestDto> retrieveLeaveRequest(string employeeID)
        {
            IEnumerable<SimpleLeaveRequestDto> requests = _context.Requests.Where(p => p.employeeId == employeeID);
            List<SimpleLeaveRequestDto> employeeRequests = new List<SimpleLeaveRequestDto>();
            foreach (var request in requests)
            {
                if (request.GetType() == typeof(SimpleLeaveRequestDto))
                {
                    employeeRequests.Add(request);
                }
            }
            return employeeRequests;
        }

        public async Task<RequestResponseDto> updateLeaverequest(UpdateLeaveRequestDto update)
        {
            var request = _context.Requests.FirstOrDefault(p => p.Id == update.Id);
            _context.Requests.Remove(request);
            _context.SaveChanges();
            var reposnse = new RequestResponseDto()
            {
                Id = request.Id,
                requestStatus = request.requestStatus,
                requestDate = request.requestDate
            };

            if (request.requestStatus == "Pending")
            {
                var updatedRequest = new SimpleLeaveRequestDto()
                {
                    Id = request.Id,
                    employeeName = request.employeeName,
                    employeeId = request.employeeId,
                    leaveReason = update.leaveReason,
                    daysRequested = update.daysRequested,
                    requestStatus = request.requestStatus,
                    requestDate = request.requestDate,
                };
                await _context.Requests.AddAsync(updatedRequest);
                _context.SaveChanges();
                return new RequestResponseDto()
                {
                    Id = updatedRequest.Id,
                    requestStatus = updatedRequest.requestStatus,
                    requestDate = updatedRequest.requestDate,
                };
            }
            return reposnse;
        }
    }
}
