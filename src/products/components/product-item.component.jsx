import React from "react";

// styles
import './product-item.styles.scss';

const ProductItem = ({ productItem, modifyProduct }) => {
  const handleOnClick = (event, id, isEdit = false) => {
    modifyProduct(id, isEdit);
  };
  const { _id, reference, name, description } = productItem;

  return (
    <section className="product-container">
      <span>{reference}</span>
      <span>{name}</span>
      <span>{description}</span>
      <span><button onClick={event => handleOnClick(event, _id, true)}>Editar</button></span>
      <span><button onClick={event => handleOnClick(event, _id)}>Eliminar</button></span>
    </section>
  );
};

export default ProductItem;
