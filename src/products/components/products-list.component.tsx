import React from "react";

// styles
import './products-list.styles.scss';

// components
import ProductItem from "./product-item.component";

// types
import ProductType from "products/types/product.type";
type Props = {
  productsList: Array<ProductType>,
  modifyProduct: (id: number | string, isEdit: boolean) => void,
};

const ProductsList = ({ productsList, modifyProduct }: Props) => {
  return (
    <>
      {productsList.length > 0 ? // Sí la lista tiene productos
        <section className="list-container">
          <section className="title">Productos</section>
          <section className="table-header">
            <span>Identificador</span>
            <span>Nombre</span>
            <span>Descripción</span>
          </section>
          {// Usamos el método map del arreglo para iterar sobre la lista
          // y renderizar cada producto
          // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
          productsList?.map((productItem, index) => 
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
