import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAPICall, saveLoggedInUser, storeToken } from "../../public/services/AuthService";
import Employee2 from "../images/Employee2.webp"
//This will login the User based on Spring security.
//For Admin we can Update Delete employee Detail and Add employee
//If logged in as Employee v can only view Details of employee
const LoginComponent = () => {
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
     const [error, setError] = useState(false);
    const navigate=useNavigate();

    const handleLoginForm=async(e)=>{
        e.preventDefault();
        if(username===""){
          setError(true);
          console.log(error);
          Swal.fire("User Name cannot be empty")
        }
        else if(password===""){
          setError(true);
          console.log(error);
          Swal.fire("Password cannot be empty")
        }
        else{
        try {
            const response=await loginAPICall(username,password);  
            const token="Bearer "+response.data.accessToken;
            const role=response.data.role;
            storeToken(token);
            saveLoggedInUser(username,role);
            navigate("/employee");

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
        backgroundImage: `url(${Employee2})`,
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
        <div className="col-md-6 mt-5 p-5">
          <div className="card bg-secondary">
            <div className="card-header">
              <h2 className="text-center text-white">Login Form</h2>
            </div>
            <div className="card-body">
              <form className="row mb-3">
                <div className="row mb-3">
                  <label className="col-md-3 control-label text-white">Username</label>
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
                  <label className="col-md-3 control-label text-white">Password</label>
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
                <div className="form-group mb-3 d-flex justify-content-center">
                  <button className="btn btn-primary" onClick={(e)=>handleLoginForm(e)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginComponent;
