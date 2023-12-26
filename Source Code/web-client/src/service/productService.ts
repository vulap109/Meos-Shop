import axios from "./my-axios";
import { API } from "../config/constant";

const getProductsNew = () => {
    return axios.get(API.product.getNew);
};
const getProductById = (id: string) => {
    return axios.get(API.product.getByid + id);
};
const getProductRecommeded = () => {
    return axios.get(API.product.getRecommended);
};

export { getProductsNew, getProductById, getProductRecommeded }