import { useState, useEffect, useCallback } from "react";

// context
import { useApi } from "providers/api.provider";

const defaultProduct = {
  reference: '',
  name: '',
  description: '',
};

const useProducts = () => {
  const { GETCall, POSTCall, PUTCall, DELETECall, tokenId } = useApi();
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [products, setProducts] = useState([]);
  const [onEditId, setEditId] = useState();

  const fetchProducts = useCallback(() => {
    GETCall('/products')
    .then(data => {
      setProducts(data);
      setProduct(defaultProduct);
    })
    .catch(() => setErrorMessage('Error consultando los producto'));
  }, [GETCall]);

  const addProduct = () => {
    POSTCall('/products/add', product)
      .then(data => {
        setProducts(data);
        setProduct(defaultProduct);
      })
      .catch(() => setErrorMessage('Error agregando el producto'));
  };

  const udpateProduct = id => {
    PUTCall(`/products/update/${id}`, product)
    .then(data => {
      setProduct(defaultProduct);
      setEditId();
      setProducts(data);
    })
    .catch(() => setErrorMessage('Error actualizando el producto'));
  };

  const deleteProduct = id => {
    DELETECall(`/products/remove/${id}`)
    .then(data => {
      setProducts(data);
    })
    .catch(() => setErrorMessage('Error borrando el producto'));
  };

  const saveProduct = () => {
    onEditId ? udpateProduct(onEditId) : addProduct();
  };

  useEffect(() => {
    if(tokenId){
      fetchProducts();
    }
  }, [tokenId, fetchProducts]);

  return {
    product,
    setProduct,
    errorMessage,
    setErrorMessage,
    products,
    setProducts,
    saveProduct,
    deleteProduct,
    setEditId,
    onEditId,
    fetchProducts,
  }
};

export default useProducts;