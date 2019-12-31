import React from "react";
import { connect } from "react-redux";


import ImageWidget from "./ImageWidget";
import ProductInfo from "./ProductInfo";
import SectionFooter from "../widgets/SectionFooter";

import { addToCart } from "../../actions/shoppingCartActions";
//import { getProduct } from '../../utils/asyncFunctions'

const Detail = ({ addToCart, product }) => {
  const { images } = product;
  const addProduct = product => {
    addToCart(product);
  };

  return (
    <React.Fragment>
      <div className="row py-3">
        <div className="col-sm-12 col-md-7 p-5">
          <ImageWidget images={images} />
        </div>
        <div className="col-sm-12 col-md-5  p-5">
          <ProductInfo product={product} addProduct={addProduct} />
        </div>
      </div>
      <SectionFooter />
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
});

const mapStateToProps = (state, props) => ({
  product: state.products.find(item => item._id === props.match.params.id),
  shoppingCart: state.shoppingCart
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
