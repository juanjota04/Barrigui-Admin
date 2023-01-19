import axios from 'axios'; //Se usa axios para hacer las peticiones
import endPoints from '@services/api';

//body será el cuerpo de la información
const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*', //Permite cualquier petición
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data; //data contiene la respuesta delll servidor
};

const deleteProducts = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProducts(id));
  return response.data;
};

//Modificar los atributos de un producto
const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*', //Permite cualquier petición
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config); //PUT

  return response.data; //data contiene la respuesta del servidor
};

export { addProduct, deleteProducts, updateProduct };
