import { useState } from 'react'
import '../../../styles/requestComponent.css'
import axios from 'axios'
import EmployeeRequests from '../requests'

const FetchedRequest = ({thisRequest,action,updating}) => {

    const [updateState, setUpdateState] = useState("0")
    const [updateReason,setUpdateReason] = useState("new update reason")
    const [updateDaysRequested,setUpdateDaysRequested] = useState("23")

    const deleteRequest = () => {
        
        const payload =   {
            "requestId":`${thisRequest.id}`
        }
        axios.post("http://localhost:9000/requests/Delete",payload)
        .then(response => {
            console.log(response.data)
            action(response.data)
        });
    }
    
    const readUpdate = (event) =>{
        setUpdateReason(event.target.value);
    }

    const readDaysRequested = (event) =>{
        setUpdateDaysRequested(event.target.value);
    }

    const triggerUpdate = () =>{
        setUpdateState("1")
    }

    const updateRequest = () => {
        const payload =   {
            "requestId":`${thisRequest.id}`,
            "leaveReason": `${updateReason}`,
            "daysRequested":`${updateDaysRequested}`
        }
        axios.post("http://localhost:9000/requests/update",payload)
        .then(response => {
            console.log(response.data.result.id)
            updating(response.data.result.id)
            setUpdateState("0")
        });
    }


    switch(updateState){
        default:
            return(
                <div className="container">
                    <div className="card mb-5">
                        <label className="card-header">Request:    {thisRequest.id}</label>
                        <div className="card-body">
                            <div>Employee:    {thisRequest.employeeName}</div>
                            <div>Employee ID:    {thisRequest.employeeId}</div>
                            <div>Reason:    {thisRequest.leaveReason}</div>
                            <div>Days Requested:    {thisRequest.daysRequested}</div>
                            <div>Request Date:    {thisRequest.requestDate}</div>
                            <div>Requested Status:    {thisRequest.requestStatus}</div>
                            
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="edit-buttons col-sm-12 col-md-6 mb-2">
                                    <button onClick={triggerUpdate} className='btn btn-info' style={{width:"100%"}}>Update</button>
                                </div>
                                <div className="col-sm-12 col-md-6 mb-2">
                                    <button onClick={deleteRequest} className='btn btn-danger' style={{width:"100%"}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "1":
            return(
                <div className="container">
                    <div className="card mb-5">
                        <label className="card-header">Request:    {thisRequest.id}</label>
                        <div className="card-body">
                            <div>Employee:    {thisRequest.employeeName}</div>
                            <div>Employee ID:    {thisRequest.employeeId}</div>
                            <div>Reason:    {thisRequest.leaveReason}</div>
                            <div>Days Requested:    {thisRequest.daysRequested}</div>
                            <div>Request Date:    {thisRequest.requestDate}</div>
                            <div>Requested Status:    {thisRequest.requestStatus}</div>
                            
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="edit-buttons col-sm-12 col-md-6 mb-2">
                                    <input onChange={readUpdate} type="text" className="form-control employee-id-entry" id="exampleFormControlInput1" placeholder="Update Leave Reason" />
                                </div>
                                <div className="edit-buttons col-sm-12 col-md-6 mb-2">
                                    <input onChange={readDaysRequested} type="text" className="form-control employee-id-entry" id="exampleFormControlInput1" placeholder="Update Requested Days" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="edit-buttons col-sm-12 col-md-6 mb-2">
                                    <button onClick={updateRequest} className='btn btn-warning' style={{width:"100%"}}>Update Database</button>
                                </div>
                                <div className="col-sm-12 col-md-6 mb-2">
                                    <button onClick={deleteRequest} className='btn btn-danger' style={{width:"100%"}}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "2":
            return (<EmployeeRequests employeeID={thisRequest.employeeI}/>)
    }
}

export default FetchedRequest;