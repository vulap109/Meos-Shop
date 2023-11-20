import axios from "./my-axios";
import { API } from "../config/constant";

const registerUser = (user: any) => {
  return axios.post(API.auth.registerUser, user);
};
const signinUser = (user: any) => {
  return axios.post(API.auth.signinUser, user);
};
const getInfoSignin = () => {
  return axios.get(API.auth.getInfoSignin);
};
const signoutUser = () => {
  return axios.get(API.auth.signoutUser);
};

export { registerUser, signinUser, getInfoSignin, signoutUser };
