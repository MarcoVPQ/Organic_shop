import React, { useEffect } from "react";
import { connect } from "react-redux";

import Search from "./Search";
import Card from "./Card";
import { filterProduct } from "../../utils/filter";

const Catalog = ({ products }) => {
  useEffect(() => {
    //console.log('rendering products')
  }, [])
  return (
    <div className="white-bg">
      <div className="row py-3">
        <div className="col-xs-6 col-md-6">
          <h1 className="ml-2">Catalogo</h1>
        </div>
        <div className="col-xs-6 col-md-6">
          <Search />
        </div>
      </div>
      <div className="row white grid text-center">
        {products.map(product => (
          <div className="col-sm-12 col-md-6 col-lg-3 my-2" key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ products, filters }) => ({
  products: filterProduct(products, filters)
});

export default connect(
  mapStateToProps,
  undefined
)(Catalog);
