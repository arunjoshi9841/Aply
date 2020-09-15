import axios from "axios";
const apiUrlBase = process.env.REACT_APP_SERVICE;
let instance  = axios.create({ baseURL:apiUrlBase});
instance.interceptors.request.use(
  async function(config){
      config.headers.Authorization = localStorage.getItem('paperclip_token');
      return config; 
  },
  function(err){
      return Promise.reject(err);
  }
);

export default instance; 
