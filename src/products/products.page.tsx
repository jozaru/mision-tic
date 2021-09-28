import React, { MouseEvent, ChangeEvent, useState } from "react";

// styles
import './products.styles.scss';

// components
import ProductsList from './components/products-list.component';

// types
import ProductType from './types/product.type';
type ProductsType = Array<ProductType>;

// constants
const defaultProduct: ProductType  = {
  id: '', 
  name: '', 
  description: '',
};

const Products = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState<ProductType>(defaultProduct);
  const [products, setProducts] = useState<ProductsType>([]);
  
  // Esta función es para manejar el evento de change en los inputs
  const handleChange = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    setErrorMessage('');
    // Asignamos un nuevo producto con los valores que tenía y con el valor nuevo
    // Usamos la notación de spread operator. Más información es este link
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    setProduct({
      ...product,
      [key]: event.target.value
    });
  };
  
  // Esta función es para manejar el evento del click en el botón de "Agregar"
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    // Validamos si todos los campos obligatorios están llenos
    const isValid = product?.id && product?.name !== '' && product?.description !== '';
    // Usamos operador condicional ternario para agregar el mesaje de error
    // en caso de que falte algún campo.
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const errorMessage = !isValid ? 'Los campos marcados con * son obligatorios' : '';
    // actualizamos el mensaje de error
    setErrorMessage(errorMessage);
    // Si todos los campos son válidos, agregamos el nuevo producto a la lista
    if (isValid) {
      // Usamos spread operator para actualizar la lista de productos
      setProducts([
        ...products,
        product
      ]);
      // Asignamos el producto por defecto para reiniciar los campos vacíos
      setProduct(defaultProduct);
    }
  };

  // Esta función es para manejar la acción de edición/eliminacion de un producto de la lista
  const modifyProduct = (id: number | string, isEdit: boolean) => {
    // Si la opción es editar
    if(isEdit) {
      // Buscamos el producto que estamos editando. Usamos el método find() del arreglo
      // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
      const product = products.find(productItem => productItem.id === id);
      // Si encuentra algún producto que coincida con el id
      if(product) {
        // Asignamos ese producto para cargar los valores en los campos y poder editarlos
        setProduct(product);
      }
    }
    // Ya sea que se esté editando o borrando, se elimina el producto de la list.
    // Usamos el método filter del array
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    setProducts(products.filter(productItem => productItem.id !== id))
  };

  return (
    <section className="products-container">
      <ProductsList
        productsList={products}
        modifyProduct={modifyProduct}
      />
      <span className="error-message">{errorMessage}</span>
      <section className="form-container">
        <label>Identificador <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleChange(event, 'id')}
            value={product.id}
          />
        </section>
        <label>Nombre <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleChange(event, 'name')}
            value={product.name}
          />
        </section>
        <label>Descripcion <span className="mandatory-field">*</span></label>
        <section className="form-input">
          <input
            onChange={event => handleChange(event, 'description')}
            value={product.description}
          /> 
        </section>
        <section className="form-button">
          <button onClick={handleOnClick}>Agregar</button>
        </section>
      </section>
    </section>
  );
};

export default Products;
