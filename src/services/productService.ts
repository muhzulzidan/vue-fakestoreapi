import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
