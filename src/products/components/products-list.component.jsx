import React from "react";

// styles
import './products-list.styles.scss';

// components
import ProductItem from "./product-item.component";

const ProductsList = ({ productsList, modifyProduct }) => {
  return (
    <>
      {productsList.length > 0 ?
        <section className="list-container">
          <section className="title">Productos</section>
          <section className="table-header">
            <span>Referencia</span>
            <span>Nombre</span>
            <span>Descripción</span>
          </section>
          {productsList?.map((productItem, index) => 
            <ProductItem 
              key={index} 
              productItem={productItem}
              modifyProduct={modifyProduct}
            />
          )}
        </section>
      : <></>}
    </>
  );
};

export default ProductsList;
