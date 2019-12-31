import React, { useEffect } from "react";

const ProductInfo = ({ product, addProduct }) => {
  useEffect(() => {
   // console.log("rendering Product info");
  }, [])
  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>{product.name}</h2>
        <h4>
          Precio : <small className="text-muted">${product.price}</small>
        </h4>
        <p className="py-4">
          {product.description
            ? product.description
            : `Lorem Ipsum es simplemente el texto de relleno de las imprentas y
        archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
        las industrias desde el año 1500, cuando un impresor (N. del T. persona
        que se dedica a la imprenta) desconocido usó una galería de textos y los
        mezcló de tal manera que logró hacer un libro de textos especime`}
        </p>
        <button
          type="button"
          className="btn btn-success btn-lg btn-block mt-5"
          onClick={() => addProduct(product)}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
