import axios from 'axios';

export const getProductsApi = async (limit) => {
  return (await axios.get(`http://localhost:5000/products/paginated/?page=1&limit=${limit}&sortOption=priceUp`))?.data;
};

export const getFilteredProductsApi = async (type) => {
  return (await axios.get(`http://localhost:5000/products/paginated/?page=1&limit=5&sortOption=priceUp&type=${type}`))?.data;
};

export const getAuthMock = async () => {
  await new Promise((resolver) => setTimeout(resolver, 1000));

  return Promise.resolve({
    name: 'username',
    email: 'username@mail.net',
    role: 'admin',
    token: '123.456.789',
  });
};