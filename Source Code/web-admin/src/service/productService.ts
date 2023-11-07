import axios from "./my-axios";
import { API } from "../config/constant";

const saveProduct = (dataProd: any) => {
  return axios.post(API.product.createProduct, dataProd);
};
const fetchAllProducts = () => {
  return axios.get(API.product.getProducts);
};
const fetchProductById = (id: string) => {
  return axios.get(API.product.getProducts + `/${id}`);
};
const updateProduct = (dataProd: any) => {
  return axios.post(API.product.updateProduct, dataProd);
};

export { saveProduct, fetchAllProducts, fetchProductById, updateProduct };
