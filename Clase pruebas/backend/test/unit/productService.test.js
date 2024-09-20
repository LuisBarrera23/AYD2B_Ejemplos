const axios = require('axios');
const productService = require('../../src/services/productService');

// Simulamos una respuesta de axios para no hacer una solicitud real a la API
jest.mock('axios');

describe('Product Service - Unit Tests', () => {
  test('should fetch all products', async () => {
    // Mock de los datos que regresa la API
    const products = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' }
    ];
    axios.get.mockResolvedValue({ data: products });

    const result = await productService.getAllProducts();
    expect(result).toEqual(products); // Verifica si los productos obtenidos son iguales al mock
    expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products'); // Verifica si se hizo la petición correcta
  });
});
