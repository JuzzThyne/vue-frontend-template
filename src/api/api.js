import axios from "axios";


const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: false,
    maxContentLength: Infinity,
    maxBodyLength: Infinity
});

instance.interceptors.request.use((request) => {
  if (!request.headers) {
    request.headers = {};
  }
  request.headers['Accept'] = 'application/json,text/html';
  request.headers["Content-Type"] = "application/json,image/apng";
  const token = localStorage.getItem("token");
  if (token) {
    console.log(token);
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
