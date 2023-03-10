import ShowRequestComponent from "./display/showLeaveRequests";

import '../../styles/requests.css'

const EmployeeRequests = ({employeeID}) => {
    return(
        <div className="container">
            <ShowRequestComponent employeeId={employeeID}/>
        </div>
    )
}

export default EmployeeRequests;