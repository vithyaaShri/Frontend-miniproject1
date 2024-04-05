import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEmployee ,deleteEmployee} from '../../public/services/EmployeeService';
import { isAdminUser } from '../../public/services/AuthService';
import Job from "../images/Job.png"

//This Page Will display the List Of Employee 
const ListEmployeeComponent = () => {
    const[employees,setEmployees]=useState([]);
    const navigate =useNavigate();
    const isAdmin=isAdminUser();
    console.log(isAdmin);
//Will display the Employee Details As soon as Page is loaded
    useEffect(()=>{listEmployee();},[]);
//Will fetch information oF all employee from backend
    const listEmployee=async()=>{
        try{
            const response=await getAllEmployee();
            setEmployees(response.data);
            console.log(response);
        }
            catch(error){
            console.log(error);
        }
    }
    const addNewEmployee=async()=>{
        navigate('/addemployee')
    }
    const removeEmployee=async(id)=>{
        try{
            const response=await deleteEmployee(id);
            listEmployee();
        }
            catch(error){
            console.log(error);
        }
    }
    const updateEmployee=async(id)=>{
        navigate(`/update-employee/${id}`)
    }
    const viewEmployee=async(id)=>{
        navigate(`/view-employee/${id}`)
    }
//Will display employee Detail in table
  return (
    <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${Job})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
    
      }}
    >
    <div className='container'>
        <h2 className='text-center'>List Of Employee</h2>
        {isAdmin &&(
            <button className='btn btn-primary mb-2'onClick={addNewEmployee}>Add Employee</button>
        )}
        
        <div >
            <table className='table table-bordered table striped '>
                <thead>
                <tr className='bg-secondary'>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {employees.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.firstname}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={()=>viewEmployee(employee.id)}>View</button>
                                {isAdmin && (
                                    <button className="btn btn-success" style={{marginLeft:"10px"}} onClick={()=>updateEmployee(employee.id)}>Update</button>
                                )}
                                {isAdmin && (
                                <button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>removeEmployee(employee.id)}>Delete</button>
                                )}
                            </td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default ListEmployeeComponent
