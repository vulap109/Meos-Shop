import axios from "axios";
import { BASE_URL } from "../constant/constant";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.defaults.withCredentials = true;

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if (error.response) {
      res = {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
      };
    }

    return res;
  }
);

export default instance;
