import React, { useState } from 'react'
import { registerAPICall } from '../../public/services/AuthService';
import { useNavigate } from 'react-router-dom';
import what from "../images/what.webp"
import Swal from "sweetalert2";
//This Component is to Register Employee Using a Registration Form For them Which will get Login detail from User Security Page
const RegisteredComponent = () => {
    const[username,setUsername]=useState("");
    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate();
     const [error, setError] = useState(false);

    const handleRegistrationForm=async(e)=>{
        e.preventDefault();
        if (username === "") {
      setError(true);
      console.log(error);
      Swal.fire("User Name cannot be empty");
    } else if (password === "") {
      setError(true);
      console.log(error);
      Swal.fire("Password cannot be empty");
    } else if (email === "") {
      setError(true);
      console.log(error);
      Swal.fire("Email cannot be empty");
    } else if (name === "") {
      setError(true);
      console.log(error);
      Swal.fire("Name cannot be empty");
    } else {
        try {
            const registerobj={name,username,password,email};
            const response=await registerAPICall(registerobj); 
            alert(response.data) ;
            navigate("/login");
            console.log(response);
        } catch (error) {
          console.log(error);  
        }
    }
    }

    
    return (
      <div
      class="container-fluid p-5"
      style={{
        backgroundImage: `url(${what})`,
        // backgroundImage: `url(${externalImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
    
      }}
    >
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card bg-secondary">
                <div className="card-header">
                  <h2 className="text-center text-white">User Registration Form</h2>
                </div>
                
                <div className="card-body">
                  <form className="row mb-3">
                  <div className="row mb-3">
                      <label className="col-md-3 control-label  text-white">Name</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="Name"
                         error={!!error}
                          className="form-control"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e)=>setName(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-3 control-label  text-white">Username</label>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="username"
                           error={!!error}
                          className="form-control"
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e)=>setUsername(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-3 control-label  text-white">Password</label>
                      <div className="col-md-9">
                        <input
                          type="password"
                          name="password"
                          error={!!error}
                          className="form-control"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-md-3 control-label  text-white">Email</label>
                      <div className="col-md-9">
                        <input
                          type="email"
                          name="email"
                         error={!!error}
                        className="form-control"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <button className="btn btn-primary" onClick={(e)=>handleRegistrationForm(e)}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}

export default RegisteredComponent
