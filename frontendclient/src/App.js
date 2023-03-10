import { useState } from 'react';
import './App.css'
import EmployeesLogin from './components/employees/employeesLogin';

const App = () => {
    const [showItem, setShowItem] = useState("0")

    const loginAdministration = () => {
        setShowItem("1");
    }

    const loginEmployees = () => {
        setShowItem("2")
    }

    switch(showItem){
        case "1":
            return(<div>Showing Administration Component</div>)
        case "2":
            return(<EmployeesLogin />)
        default:
            return(
                <div className="container button-parent-container">
                    <div className="row center-button-row shadow p-3 mb-5 bg-body rounded">
                        <div className="col-sm-12 col-md-6">
                            <button onClick={loginAdministration} className='btn btn-info portal-button mb-2 mt-2'>Administration</button>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <button onClick = {loginEmployees} className='btn btn-success portal-button mt-2 mb-2'>Employees</button>
                        </div>
                    </div>
                </div>
            )
    }
}

export default App;