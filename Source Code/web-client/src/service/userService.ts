import axios from "./my-axios";
import { API } from "../config/constant";

const getInfoUser = (userName: string) => {
  return axios.post(API.user.getInfoAccount, { userName });
};
const updateInfoUser = (data: any) => {
  return axios.post(API.user.updateInfoAccount, data);
};
const saveAddress = (data: any) => {
  return axios.post(API.user.createAddress, data);
};
const getAddress = (username: string) => {
  return axios.get(API.user.getAllAddress + `/${username}`);
};

export { getInfoUser, updateInfoUser, saveAddress, getAddress };
