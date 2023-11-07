import axios from "./my-axios";
import { API } from "../config/constant";

const fetchAllCategories = () => {
  return axios.get(API.category.getCategory);
};

const fetchCategoryById = (id: string) => {
  return axios.get(API.category.getCategory + `/${id}`);
};

const saveCategory = (dataCat: any) => {
  return axios.post(API.category.createCategory, dataCat);
};
const updateCategory = (dataCat: any) => {
  return axios.post(API.category.updateCategory, dataCat);
};

export { fetchAllCategories, saveCategory, fetchCategoryById, updateCategory };
