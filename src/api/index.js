import axios from "axios";
const apiUrlBase = process.env.SERVICE;

export const homeInstance = axios.create({
  baseURL: apiUrlBase  
});
