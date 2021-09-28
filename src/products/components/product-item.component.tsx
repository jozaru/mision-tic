import React, { MouseEvent } from "react";

// styles
import './product-item.styles.scss';

// types
import ProductType from "products/types/product.type";
type Props = {
  productItem: ProductType,
  modifyProduct: (id: number | string, isEdit: boolean) => void,
};

const ProductItem = ({ productItem, modifyProduct }: Props) => {
  // Esta función es para manejar la acción de click sobre alguno de los botones
  // Se le pasa como parámetros el elemento que generó el evento, el id del producto
  // y un flag para validar si estoy editando o eliminando
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>, id: number | string, isEdit: boolean = false) => {
    modifyProduct(id, isEdit);
  };

  return (
    <section className="product-container">
      <span>{productItem.id}</span>
      <span>{productItem.name}</span>
      <span>{productItem.description}</span>
      <span><button onClick={event => handleOnClick(event, productItem.id, true)}>Editar</button></span>
      <span><button onClick={event => handleOnClick(event, productItem.id)}>Eliminar</button></span>
    </section>
  );
};

export default ProductItem;
