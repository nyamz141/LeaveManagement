

const CreateReceipt = ({thisResponse,thisEmployee}) => {
    return(
        <div className="container request-parent-container">
            <div className="border-decoration-parent">
                <div>Request ID: {thisResponse.id}</div>
                <div>Request Date: {thisResponse.requestDate}</div>
                <div>Request Status: {thisResponse.requestStatus}</div>
            </div>
        </div>
    )
}

export default CreateReceipt;

