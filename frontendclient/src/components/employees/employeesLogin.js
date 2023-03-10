import { useState } from 'react'
import '../styles/employeesLogin.css'
import App from '../../App'
import EmployeeRequests from './requests/requests'

const LoginEmployees = () => {
    const [displayState, setDisplayState] = useState("0")
    const [employeeId,setEmployeeID] = useState("")

    const captureInput = (event) => {
        setEmployeeID(event.target.value)
    }

    const cancelQuery = () => {
        setDisplayState("1")
    }

    const accessRequests = () => {
        setDisplayState("2")
    }

    switch(displayState){
        case "1":
            return(<App />)
        case "2":
            return(<EmployeeRequests employeeID={employeeId}/>)
        default:
            return(
                <div className="container employees-parent-container">
                    <div className="row center-button-row shadow p-3 mb-5 bg-body rounded">
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <input onChange={captureInput} type="text" className="form-control employee-id-entry" id="exampleFormControlInput1" placeholder="Employee ID" />
                            </div>
                            <button onClick={accessRequests} className='btn btn-success employee-button-style mb-2'>Access Request</button>
                            <button onClick={cancelQuery} className='btn btn-danger employee-button-style mb-2'>Cancel</button>
                        </div>
                    </div>
                </div>
            )
    }
}

export default LoginEmployees;