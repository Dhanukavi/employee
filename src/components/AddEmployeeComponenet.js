import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const AddEmployeeComponent=()=>{
 const [firstname,setFirstName]=useState('')
const [lastname,setLastName]=useState('')
 const [emailId,setEmailId]=useState('')
 const[phoneNo,setPhoneNo]=useState('')
  const[address,setAddress]=useState('') 
  const history =useHistory(); 
 
  const{id}=useParams();
  const saveOrUpdateEmployee=(e)=>{
    e.preventDefault();

    const employee ={firstname,lastname,emailId,phoneNo,address};

    if(id){
        EmployeeService.updateEmployee(id,employee).then((response)=>{
           history.push('/employees')
        }).catch(error=>{
            console.log(error);
        })

    }else{

   EmployeeService.createEmployee(employee).then((response)=>{
    console.log(response.data);
    history.push('/employees');

   }).catch(error=>{
    console.log(error)
   })
  }
}



  useEffect(()=>{
    EmployeeService.getEmployeeById(id).then((response)=>{
        setFirstName(response.data.firstname)
        setLastName(response.data.lastname)
        setEmailId(response.data.emailId)
        setPhoneNo(response.data.phoneNo)
        setAddress(response.data.address)
    }).catch(error=>{
        console.log(error)
    })
  },[])

  const title = ()=>{
    if(id){
        return <h2 className="text-center">Update Employee</h2>
    }else{
return <h2 className="text-center">Add Employee</h2>
    }
    
  }
 

    return(
        <div>
            <br/><br/>
     <div className="container">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset offset-md-3">
             {
                title()
             }
                <div className="card-body">
                  
                      
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name:</label>
                                    <input
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstname"
                                    className="form-control"
                                    value={firstname}
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    
                                    ></input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name:</label>
                                    <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lastname"
                                    className="form-control"
                                    value={lastname}
                                    onChange={(e)=>setLastName(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email ID:</label>
                                    <input
                                    type="email"
                                    placeholder="Enter Email ID"
                                    name="emailId"
                                    className="form-control"
                                    value={emailId}
                                    onChange={(e)=>setEmailId(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Phone number:</label>
                                    <input
                                    type="text"
                                    placeholder="Enter phone number"
                                    name="phoneNo"
                                    className="form-control"
                                    value={phoneNo}
                                    onChange={(e)=>setPhoneNo(e.target.value)}
                                    ></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Address:</label>
                                    <input
                                    type="address"
                                    placeholder="Enter Address"
                                    name="address"
                                    className="form-control"
                                    value={address}
                                    onChange={(e)=>setAddress(e.target.value)}
                                    ></input>
                                </div>
                                <button className="btn btn-success" onClick={(e)=>saveOrUpdateEmployee(e)}>submit</button>
                                <Link to="/employees" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    
                </div>
                </div>
        </div>
        </div>
   
    )
}
export default AddEmployeeComponent