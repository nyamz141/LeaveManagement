import '../../../styles/requestComponent.css';
import FetchedRequest from './displaySingleFetchedRequest';
import CreateRequestComponent from './createLeaveRequest';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ShowRequestComponent = ({employeeId}) => {
    const [screenState,setScreenState] = useState("0")
    const [allEmployeeRequests,setEmployeeRequests] = useState([])
    const [requestDeleted,setRequestDeleted] = useState(0)
    const [deleteResponse, setDeleteResponse] = useState("")
    const [updateResponse, setUpdateResponse] = useState(0)
    const [updateStatus,setUpdateStatus] = useState("")

    useEffect(() => {
        if(employeeId !== ""){
            const payload =   {
                "employeeId":`${employeeId}`
            }
            axios.post("http://172.105.181.131:9000/requests/retrieve",payload)
            .then(response => {
                setEmployeeRequests(response.data)
            });
        }
    },[employeeId,requestDeleted,updateResponse]);

    const createNewRequest = () => {
        setScreenState("1")
    }

    var requestKey = (result) =>{
        setRequestDeleted(requestDeleted+1)
        setDeleteResponse(result)
    }

    var updateAction = (result) => {
        setUpdateResponse(updateResponse + 1)
        setUpdateStatus(`Request ${result} has been updated`)
    }

    var fetchedRequests = allEmployeeRequests.map((res,index) => {
        return <FetchedRequest key={index} thisRequest={res} action={requestKey} updating={updateAction}/>
    })

    switch(screenState){
        case "1":
            return(<CreateRequestComponent />);
        default:
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <button onClick={createNewRequest} className='btn btn-success'>Create</button>
                        {<div className='mt-4 mb-2 delete-message-formatting'>{deleteResponse}</div>}
                        {<div className='mt-4 mb-2 delete-message-formatting'>{updateStatus}</div>}
                        <hr />
                    </div>
                    <div className='component-message'>
                        {fetchedRequests}
                    </div>
                </div>
            )
    }
}

export default ShowRequestComponent;