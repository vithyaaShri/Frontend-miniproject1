import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEmployee,
  saveEmployee,
  updateEmployee,
} from "../../public/services/EmployeeService";
import Swal from "sweetalert2";
import Job from "../images/Job.png";

//This Page is for Updating Employee Details by Admin
const EmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
   const [error, setError] = useState(false);
//Will change Page Title based on the Request
  const pageTitle = () => {
    return id ? (
      <h2 className="text-center">Update Employee</h2>
    ) : (
      <h2 className="text-center">Add Employee</h2>
    );
  };
  const addorUpdateEmployee = async (e) => {
    e.preventDefault();
    if(firstname===""){
      setError(true);
      console.log(error);
      Swal.fire("First Name cannot be empty");
    }
    else if(email===""){
      setError(true);
      console.log(error);
      Swal.fire("Email Name cannot be empty");
    }
    else{
    const employee = { firstname, lastname, email };
    console.log(employee);
    try {
      if (id) {
        await updateEmployee(id, employee);
        navigate("/employee");
      } else {
        const response = await saveEmployee(employee);
        navigate("/employee");
      }
    } catch (error) {
      console.log(error);
    }
    }
  };
  //Fetch the Employee Detail AS soon as page is loaded
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getEmployee(id);
          const employee = response.data;
          setFirstName(employee.firstname);
          setLastName(employee.lastname);
          setEmail(employee.email);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {pageTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">FIRST NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter FirstName"
                     error={!!error}
                    name="firstName"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">LAST NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter LastName"
                    name="lastName"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">EMAIL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                     error={!!error}
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => addorUpdateEmployee(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
