import { useState } from 'react';
import '../../../styles/requestComponent.css';
import axios from 'axios';
import CreateReceipt from './createRequestReceipt';
import EmployeeRequests from '../requests';

const CreateRequestComponent = ({receivedEmployeeId}) => {

    const [responseData, setResponseData] = useState([])
    const [employeeName, setEmployeeName] = useState("")
    const [employeeId, setEmployeeId] = useState(receivedEmployeeId)
    const [leaveReason, setLeaveReason] = useState("")
    const [daysRequested, setDaysRequested] = useState("")
    const [formWarning, setFormWarning] = useState("")
    const [displayResponse, setDisplayResponse] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    var formWarningDefault = "All fields are mandatory"

    const getEmployeeName = (event) => {
        setEmployeeName(event.target.value)
    }

    const getEmployeeId = (event) => {
        setEmployeeId(event.target.value)
    }

    const getLeaveReason = (event) => {
        setLeaveReason(event.target.value)
    }

    const getDaysRequested = (event) => {
        setDaysRequested(event.target.value)
    }

    const resetWarning = () => {
        if(formWarning !== ""){
            setFormWarning("")
        }
        if(displayResponse !== "0"){
            setDisplayResponse("0");
        }
    }

    var requestLeave = () => {
        if(employeeName === "" || employeeId === "" || leaveReason === "" || daysRequested === ""){
            setFormWarning(formWarningDefault)
        }else{
            const payload = {
                "employeeName":`${employeeName}`,
                "employeeId":`${employeeId}`,
                "leaveReason":`${leaveReason}`,
                "daysRequested":`${daysRequested}`
            }
            axios.post("http://localhost:9000/requests/create",payload)
            .then(response => {
                setResponseData([...responseData,response.data.result])
                setDisplayResponse("1");
            });
        }
    }

    const returnHome = () => {
        setDisplayResponse("2")
    }

    switch(displayResponse){
        case "0":
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <form onSubmit={handleSubmit}>
                            <div className='form-warning-label'>
                                <label className='mb-3'>{formWarning}</label>
                            </div>
                            <input onClick={resetWarning} onChange={getEmployeeName} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee Name" />
                            <input onClick={resetWarning} onChange={getEmployeeId} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee ID" />
                            <input onClick={resetWarning} onChange={getLeaveReason} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Leave Reason" />
                            <input onClick={resetWarning} onChange={getDaysRequested} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Number of off days requested" />
                            <button  onClick={requestLeave} className='btn btn-success mt-2' style={{width:"100%",height:"40px"}}>Request Leave</button>
                        </form>
                    </div>
                </div>
            )
        case "1":
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <form onSubmit={handleSubmit}>
                            <div className='form-warning-label'>
                                <label className='mb-3'>{formWarning}</label>
                            </div>
                            <input onClick={resetWarning} onChange={getEmployeeName} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee Name" />
                            <input onClick={resetWarning} onChange={getEmployeeId} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee ID" />
                            <input onClick={resetWarning} onChange={getLeaveReason} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Leave Reason" />
                            <input onClick={resetWarning} onChange={getDaysRequested} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Number of off days requested" />
                            <button  onClick={requestLeave} className='btn btn-success mt-2' style={{width:"100%",height:"40px"}}>Request Leave</button>
                            <button  onClick={returnHome} className='btn btn-info mt-2' style={{width:"100%",height:"40px"}}>Return To Requests</button>
                        </form>
                    </div>
                    <div className='response-data-frame mt-5'>
                        <CreateReceipt thisResponse={responseData.at(-1)} thisEmployee={employeeId}/>
                    </div>
                </div>
            )
        case "2":
            return (<EmployeeRequests employeeID={employeeId} />)
        default:
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <form onSubmit={handleSubmit}>
                            <div className='form-warning-label'>
                                <label className='mb-3'>{formWarning}</label>
                            </div>
                            <input onClick={resetWarning} onChange={getEmployeeName} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee Name" />
                            <input onClick={resetWarning} onChange={getEmployeeId} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Employee ID" />
                            <input onClick={resetWarning} onChange={getLeaveReason} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Leave Reason" />
                            <input onClick={resetWarning} onChange={getDaysRequested} type="text" className="form-control employee-id-entry mb-2" id="exampleFormControlInput1" placeholder="Number of off days requested" />
                            <button  onClick={requestLeave} className='btn btn-success mt-2' style={{width:"100%",height:"40px"}}>Request Leave</button>
                        </form>
                    </div>
                </div>
            )
    }
}

export default CreateRequestComponent; 