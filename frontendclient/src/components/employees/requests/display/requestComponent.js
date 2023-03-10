import { useState } from 'react';
import '../../../styles/requestComponent.css';
import CreateRequestComponent from './createLeaveRequest';

//SAFE TO REMOVE

const RequestComponent = ({requestProp}) => {

    const [createState, setCreateSet] = useState("0")
    
    const requestCreate = () => {
        setCreateSet("1")
    }

    switch(createState){
        case "0":
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <button onClick={requestCreate} className='btn btn-success'>Create</button>
                        <hr />
                    </div>
                    <div className='component-message'>
                        No Request To Display
                    </div>
                </div>
            )
        case "1":
            return(<CreateRequestComponent />);
        default:
            return(
                <div className="container request-parent-container shadow p-3 mb-5 bg-body rounded">
                    <div className="border-decoration-parent">
                        <button onClick={requestCreate} className='btn btn-success'>Create</button>
                        <hr />
                    </div>
                    <div className='component-message'>
                        No Request To Display
                    </div>
                </div>
            )
    }


    
}

export default RequestComponent; 