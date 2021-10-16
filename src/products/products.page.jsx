import React from "react";

// styles
import './products.styles.scss';

// components
import ProductsList from './components/products-list.component';

//hooks
import useProducts from './hooks/products.hook';

const Products = () => {
  const {
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
  } = useProducts();
  
  const handleOnChange = (event, key) => {
    setErrorMessage('');
    setProduct({
      ...product,
      [key]: event.target.value,
    });
  };
  
  const handleOnClick = () => {
    const isValid = product?.reference && product?.name !== '' && product?.description !== '';
    if (isValid) {
      saveProduct();
    } else {
      setErrorMessage('Los campos marcados con * son obligatorios');
    }
  };

  const handleOnClickCancel = () => {
    setEditId(false);
    fetchProducts();
  };

  const modifyProduct = (id, isEdit) => {
    if(isEdit) {
      setEditId(id);
      setProduct(products.find(productItem => productItem._id === id));
      setProducts(products.filter(productItem => productItem._id !== id));
    } else {
      deleteProduct(id);
    }
  };

  return (
    <section className="products-container">
      <ProductsList
        productsList={products}
        modifyProduct={modifyProduct}
      />
      <span className="error-message">{errorMessage}</span>
      <section className="form-container">
        <label>Referencia <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'reference')}
            value={product?.reference}
            disabled={onEditId}
          />
        </section>
        <label>Nombre <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'name')}
            value={product?.name}
          />
        </section>
        <label>Descripcion <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleOnChange(event, 'description')}
            value={product?.description}
          /> 
        </section>
        <section className="form-button">
          <button onClick={handleOnClick}>{onEditId ? 'Modificar' : 'Agregar'}</button>
          {onEditId ? <button onClick={handleOnClickCancel}>Cancelar</button> : <></>}
        </section>
      </section>
    </section>
  );
};

export default Products;
