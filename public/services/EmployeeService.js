import axios from "axios";
import { getToken } from "./AuthService";
const BASE_REST_API_URL="http://localhost:8081/api/employee";

axios.interceptors.request.use(
    function (config) {
    config.headers["Authorization"]= getToken();
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export const getAllEmployee=()=>axios.get(BASE_REST_API_URL);

export const getEmployee=(id)=>axios.get(BASE_REST_API_URL+"/"+id);
export const saveEmployee=(Employee)=>axios.post(BASE_REST_API_URL,Employee);
export const updateEmployee=(id,Employee)=>axios.put(BASE_REST_API_URL+"/"+id,Employee);
export const deleteEmployee=(id)=>axios.delete(BASE_REST_API_URL+"/"+id);
