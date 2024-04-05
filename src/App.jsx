import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import EmployeeComponent from "./component/EmployeeComponent";
import ViewEmployee from "./component/ViewEmployee";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginComponent from "./component/loginComponent";
import RegisteredComponent from "./component/RegisteredComponent";
import { isUserLoggedIn } from "../public/services/AuthService";
import Home from "./component/Home";

function App() {
  const [count, setCount] = useState(0);

  function AuthenticatedRoute({ children }) {
    const isAuth = isUserLoggedIn();
    if (isAuth) {
      return children;
    }
    return <Navigate to="/" />;
  }
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/employee"
            element={
              <AuthenticatedRoute>
                <ListEmployeeComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/addemployee"
            element={
              <AuthenticatedRoute>
                <EmployeeComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/update-employee/:id"
            element={
              <AuthenticatedRoute>
                <EmployeeComponent />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route
            path="/view-employee/:id"
            element={
              <AuthenticatedRoute>
                <ViewEmployee />
              </AuthenticatedRoute>
            }
          ></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/register" element={<RegisteredComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
