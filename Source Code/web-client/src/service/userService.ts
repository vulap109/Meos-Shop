import axios from "./my-axios";
import { API } from "../config/constant";

const getInfoUser = (email: string) => {
  return axios.post(API.user.getInfoAccount, { email });
};

export { getInfoUser };
