import './App.css';
import {v4 as uuidv4} from 'uuid'
import './input.css'
import Self from './Selfapi'
import { useState } from 'react';
import Employee from './components/Employee';

function App() {
  const [role, setRole] = useState()
  const [employees,setEmployees]=useState(Self)
  const showEmployees = true

  function updatedEmployees(id,newName,newRole){ 
    const updatedList=employees.map((employee)=>{
      if(id===employee.id){
        console.log("employee with id match",employee)
        return {...employee,name:newName,role:newRole}
      }
      console.log(employee)
      return employee
    })
    setEmployees(updatedList)
  }
  return (
    <>
      <div className='App'>
        {showEmployees ? <><input type="text" onChange={(e) => { setRole(e.target.value)}}/>
          <div className='flex flex-wrap justify-center'>
          {employees.map((employee)=>{
            return(
            <Employee updatedEmployees={updatedEmployees} key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img}/>
          )}
          )}
          </div>
        </> : <p>not able to see</p>}
      </div>
    </>
  );
}

export default App;
