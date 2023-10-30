import axios from "./my-axios";
import { API } from "../constant/constant";

const fetchAllCategories = () => {
  return axios.get(API.category.getAll);
};

const saveCategory = (dataCat: any) => {
  return axios.post(API.category.create, dataCat);
};
export { fetchAllCategories, saveCategory };
