import axios from 'axios';

export const getProductsApi = async (limit) => {
  return (await axios.get(`http://localhost:5000/products/paginated/?page=1&limit=${limit}&sortOption=priceUp`))?.data;
};

export const getFilteredProductsApi = async (type) => {
  return (await axios.get(`http://localhost:5000/products/paginated/?page=1&limit=5&sortOption=priceUp&type=${type}`))?.data;
};