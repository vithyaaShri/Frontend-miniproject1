import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import { UserLoggedOut, isUserLoggedIn } from '../../public/services/AuthService';
//This Page is for Header Component
const HeaderComponent = () => {
    const URL="http://localhost:5173/";
    const navigate=useNavigate();
    //Will give the login user Detail
    const isAuth= isUserLoggedIn();
    //Will clear Local and Session memory when logged out
    const handleLogOut=()=>{
      UserLoggedOut();
      navigate("/login");
    }
    //This Section is for form description
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div><a href={URL}className='navbar-brand'>Employee Management</a></div>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    {!isAuth && (
                      <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    )}
                    {!isAuth && (
                       <li className="nav-item">
                       <Link to="/register" className="nav-link">Register</Link>
                     </li>
                    )}
                   {isAuth && (
                     <li className="nav-item">
                     <Link to="/login" className="nav-link" onClick={handleLogOut}>Logout</Link>
                   </li>
                   )}
                   
                  </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent
