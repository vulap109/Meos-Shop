import axios from "./my-axios";
import { API } from "../config/constant";

const createGroup = (data: any) => {
  return axios.post(API.user.createGroup, data);
};
const fetchAllUsers = () => {
  return axios.get(API.user.getUsers);
};
const fetchAllGroups = () => {
  return axios.get(API.user.getGroups);
};
const fetchAllRoles = () => {
  return axios.get(API.user.getRoles);
};
const updateUser = (data: any) => {
  return axios.post(API.user.updateUser, data);
};
const getGroupRole = (id: string) => {
  return axios.get(API.user.getGroupRole + id);
};

export {
  createGroup,
  fetchAllUsers,
  fetchAllGroups,
  fetchAllRoles,
  updateUser,
  getGroupRole,
};
