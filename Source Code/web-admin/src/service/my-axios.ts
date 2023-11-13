import axios from "axios";
import { BASE_URL } from "../config/constant";

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
    const status = error.response?.status || 500;
    let res = {};

    switch (status) {
      case 400:
        console.log("400");
        break;
      case 401:
        console.log("401");
        // window.location.replace("/sign-in");
        break;
      case 403:
        console.log("403");
        break;
      case 404:
        console.log("404");
        break;

      default:
        console.log("500");
        break;
    }
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
