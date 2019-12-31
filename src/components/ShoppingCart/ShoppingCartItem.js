import React, { useState } from "react";
import { connect } from "react-redux";

import ShoppingCartWidget from "../widgets/shoppingCartWidget";
import { removeFromCart } from "../../actions/shoppingCartActions";

const ShoppingCartItem = ({ item, removeFromCart }) => {
  const [amount, setAmount] = useState(item.purchased);

  const onRemove = id => {
    removeFromCart(id);
  };

  const plusOne = () => {
    setAmount((amount + 1));
  };

  const minusOne = () => {
    if(amount === 1) return
    setAmount((amount - 1));
  };

  return (
    <li className="list-group-item d-lg-flex justify-content-between align-items-center">
      <div className="d-flex">
        <img
          src={item.images[0]}
          style={{ width: "80px" }}
          className="rounded-circle"
          alt={item.name}
        />
        <div className="ml-3">
          <p className="m-0">
            <strong>{item.name}</strong>
          </p>
          <p className="m-0">
            <strong>Precio</strong> ${item.price}
          </p>
          <p className="m-0">
            <strong>En carrito</strong> {amount}
            {amount === 1 ? " ud" : " uds"}
          </p>
          <p className="m-0">
            <strong>Subtotal</strong> ${amount * item.price}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <ShoppingCartWidget
          product={item}
          plusOne={plusOne}
          minusOne={minusOne}
        />
        <span
          className="btn btn-danger"
          style={{ cursor: "pointer", fontSize: "16px" }}
          onClick={() => onRemove(item._id)}
        >
          <i className="fa fa-times" aria-hidden="true" />
        </span>
      </div>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ShoppingCartItem);
