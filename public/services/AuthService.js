import axios from "axios";
const AUTH_REST_API_URL="http://localhost:8081/api/auth";
export const registerAPICall=(registerobj)=>axios.post(AUTH_REST_API_URL+"/register",registerobj);
export const loginAPICall=(username,password)=>axios.post(AUTH_REST_API_URL+"/login",{username,password});
export const storeToken=(token)=>localStorage.setItem("token",token);
export const getToken=()=>localStorage.getItem("token");


export const saveLoggedInUser=(username,role)=>{
    sessionStorage.setItem("authenticationUser",username);
    sessionStorage.setItem("role",role);
};

export const isUserLoggedIn=()=>{
    const username=sessionStorage.getItem("authenticationUser");
    if(username==null){
        return false;
    }else{
        return true;
    }
};
export const getLoggedInUser=()=>{
    const username=sessionStorage.getItem("authenticationUser");
    return username;
};
export const UserLoggedOut=()=>{
    localStorage.clear();
    sessionStorage.clear();
};
export const isAdminUser=()=>{
    const role=sessionStorage.getItem("role");
    console.log(role);
    if(role !=null && role=="ROLE_ADMIN" ){
        return true;
    }else{
        return false;
    }
};