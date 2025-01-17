import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponents = () => {

    const [employees, setEmployees] =  useState([])
    useEffect(()=>{
       getAllEmployees();
    },[])

const getAllEmployees=()=>{
  EmployeeService.getAllEmployees().then((response)=>{
    setEmployees(response.data)
    console.log(response.data);
   }).catch(error=>{
    console.log(error);
   })

}
    const deleteEmployee=(employeeId)=>{
    EmployeeService.deleteEmployee(employeeId).then((response)=>{
    getAllEmployees();
    }).catch(error=>{
      console.log(error);
    })
    }

  return (
    <div className="container">
      <h2 className="text-center">Employee Details</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">ADD EMPLOYEE</Link>
      <table className="table table-bordered table-stripes">
        <thead>
            <th> Employee Id</th>
            <th> Employee First Name</th>
            <th> Employee Last Name</th>
            <th> Employee Email id</th>
            <th>Employee Phone Number</th>
            <th>Employee Address</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {
                employees.map(
                    employee =>
                    <tr key={employee.id}>
                      <td>{employee.id}</td>
                        <td> {employee.firstname}</td>
                        <td> {employee.lastname}</td>
                        <td> {employee.emailId}</td>
                        <td>{employee.phoneNo}</td>
                        <td>{employee.address}</td>
                        <td>
                          
                          <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>UPDATE</Link>
                          <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)} style={{marginLeft:"10px"}}>DELETE</button>
                        </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponents
