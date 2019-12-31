import React from "react";
import { connect } from "react-redux";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartList = ({ shoppingCart }) => (
  <div className="col-md-6 py-4">
    <ul className="list-group">
      {shoppingCart.map(item => (
        <ShoppingCartItem item={item} key={item._id} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

export default connect(
  mapStateToProps,
  undefined
)(ShoppingCartList);
