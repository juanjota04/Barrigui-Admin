import React, { useState } from 'react';
import FormProduct from '@components/FormProduct';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';
import { Alert } from '@common/Alert';
import { useAlert } from '@hooks/useAlert';

//La función edit retorna el formulario para pasarle un nuevo valor del producto
export default function Edit() {
  const [product, setProduct] = useState({}); //Donde se almacena la información
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { alert, setAlert, toggleAlert} = useAlert();

  React.useEffect(() => {
    //El id se obtendrá desde la URL
    const { id } = router.query;
    //Si la ruta aún no está lista, entonces el id tampoco
    if (!router.isReady) return;
    //Función para obtener la info del producto a partir del id
    const getProduct = async () => {
      const response = await axios.get(endPoints.products.getProduct(id));
      return response;
    };
    //Si la promesa se resuelve, asignamos la data a product
    getProduct()
      .then((response) => setProduct(response.data))
      //Si el id no existe, mandamos a notFound
      .catch((err) => router.push('/notFound'));
  }, [router?.isReady]);

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <FormProduct setOpen={setOpen} setAlert={setAlert} product={product} />
    </>
  );
}
