import axios from "./my-axios";
import { API } from "../constant/constant";

const registerUser = (user: any) => {
  return axios.post(API.auth.registerUser, user);
};
const signinUser = (user: any) => {
  return axios.post(API.auth.signinUser, user);
};

export { registerUser, signinUser };
