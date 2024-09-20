const axios = require('axios');

const BASE_URL = 'https://fakestoreapi.com';

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
