import axios from "./my-axios";
import { API } from "../config/constant";

const getInfoUser = (userName: string) => {
  return axios.post(API.user.getInfoAccount, { userName });
};
const updateInfoUser = (data: any) => {
  return axios.post(API.user.updateInfoAccount, data);
};

export { getInfoUser, updateInfoUser };
