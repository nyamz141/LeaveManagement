using LeaveRequests.Data.API.UserAccessModules;
using Microsoft.AspNetCore.Mvc;

namespace LeaveRequests.Controllers
{
    [ApiController]
    [Route("requests")]
    public class LeaveRequestsController: ControllerBase
    {
        private readonly IUserAccessLayer _accessLayer;

        public LeaveRequestsController(IUserAccessLayer accessLayer)
        {
            _accessLayer = accessLayer;
        }

        [HttpPost]
        [Route("create")]
        public IActionResult registerNewRequest([FromBody] Dictionary<string,string> input)
        {
            return Ok(_accessLayer.registerNewLeaveRequest(input));
        }

        [HttpPost]
        [Route("update")]
        public IActionResult updateLeaveRequest([FromBody] Dictionary<string, string> input)
        {
            return Ok(_accessLayer.modifyLeaveRequest(input));
        }

        [HttpPost]
        [Route("Delete")]
        public IActionResult deleteLeaveRequest([FromBody] Dictionary<string, string> input)
        {
            return Ok(_accessLayer.purgeLeaveRequest(input));
        }

        [HttpPost]
        [Route("retrieve")]
        public IActionResult retrieveLeaveRequests([FromBody] Dictionary<string, string> input)
        {
            return Ok(_accessLayer.fetchEmployeeLeaveRequests(input));
        }
    }
}
