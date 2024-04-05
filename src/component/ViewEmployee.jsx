import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployee } from "../../public/services/EmployeeService";
import Job from "../images/Job.png"
//This is view Page for Employee and Admin
const ViewEmployee = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [empid, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getEmployee(id);
          const Employee = response.data;
          console.log(Employee);
          setFirstname(Employee.firstname);
          setLastname(Employee.lastname);
          setEmail(Employee.email);
          setId(Employee.id);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const homePage = () => {
    navigate("/");
  };
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
      
      <h2 className="text-center">Employee Details</h2>
      <div>
      <button className="btn btn-secondary" onClick={(e) => homePage(e)}>
        Back to home page
      </button>
        <table className="table table-bordered table striped">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee FirstName</th>
              <th>Employee LastName</th>
              <th>Employee Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{empid}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};
//     <div class="card" style={divStyle}>
//       <div class="card-header">
//         Employee details about {firstName}
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">EMPLOYEE ID:{empid}</li>
//         <li class="list-group-item">
//           FULL NAME:{firstName} {lastName}
//         </li>
//         <li class="list-group-item">EMAIL ID:{email}</li>
//       </ul>
//       <button className="btn btn-secondary" onClick={(e) => homePage(e)}>
//         Back to home page
//       </button>
//     </div>

//   );
// };

export default ViewEmployee;
