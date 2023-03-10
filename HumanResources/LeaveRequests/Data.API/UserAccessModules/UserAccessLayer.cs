using AutoMapper;
using LeaveRequests.Data.API.Databaselayer;
using LeaveRequests.Data.API.Model;
using LeaveRequests.Data.API.Model.Responses;
using LeaveRequests.Data.API.Utilities;
using LeaveRequests.Data.API.UserAccessModules;

namespace LeaveRequests.Data.API.UserAccess
{
    public class UserAccessLayer : IUserAccessLayer
    {
        private readonly IDatabaseLayer _databaseLayer;
        private readonly IGlobalUtilities _utilities;
        private readonly IMapper _mapper;

        public UserAccessLayer(IDatabaseLayer databaseLayer, IGlobalUtilities utilities, IMapper mapper)
        {
            _databaseLayer = databaseLayer;
            _utilities = utilities;
            _mapper = mapper;
        }
        public List<SimpleLeaveRequest> fetchEmployeeLeaveRequests(Dictionary<string,string> userinput)
        {
            List<SimpleLeaveRequest> allrequests = new List<SimpleLeaveRequest>();
            List<SimpleLeaveRequestDto> employeerequests = _databaseLayer.retrieveLeaveRequest(userinput["employeeId"]);

            foreach(var request in employeerequests)
            {
                if(request.GetType() == typeof(SimpleLeaveRequestDto))
                {
                    allrequests.Add(_mapper.Map<SimpleLeaveRequest>(request));
                }
            }
            return allrequests;
        }

        public async Task<RequestResponse> modifyLeaveRequest(Dictionary<string, string> userinput)
        {
            UpdateLeaveRequestDto update = _utilities.packageUpdateRequestUserInput(userinput);
            RequestResponseDto response = await _databaseLayer.updateLeaverequest(update);
            return (_mapper.Map<RequestResponse>(response));
        }

        public string purgeLeaveRequest(Dictionary<string, string> userinput)
        {
            return _databaseLayer.deleteLeaveRequest(userinput["requestId"]);
        }

        public async Task<RequestResponse> registerNewLeaveRequest(Dictionary<string, string> userinput)
        {
            SimpleLeaveRequestDto request = _utilities.packageNewRequestUserInput(userinput);
            RequestResponseDto response = await _databaseLayer.createNewLeaveRequest(request);
            return (_mapper.Map<RequestResponse>(response));
        }
    }
}
