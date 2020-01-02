import axios from "axios";
const apiUrlBase = process.env.REACT_APP_SERVICE;

export const homeInstance = axios.create({
  baseURL: apiUrlBase  
});
