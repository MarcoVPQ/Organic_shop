import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { history } from "../../router/AppRouter";

import { addToCart, removeFromCart } from "../../actions/shoppingCartActions";


const Card = props => {
  const { images, name, price, _id } = props.product;
  const [imageIsLoading, setImageisLoading] = useState(true)

  const addProduct = product => {
    props.addToCart(product);
  };

  const goToProduct = () => {
    history.push(`/product/${_id}`);
  };

  useEffect(() => {

  }, [imageIsLoading])

  return (
    <div className="card">
      <img
        src={images[0]}
        onLoad={() => setImageisLoading(false)}
        className="card-img-top fadeIn"
        style={{ height: "12rem" }}
        alt={name}
      />
     {
       imageIsLoading &&  
      <div  className="absolute-loader">
         <img
          src="/assets/loader.gif"
          alt="loader"
        />
      </div>
     }
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Precio:</strong> ${price}
        </p>
        <button 
          onClick={() => {
            goToProduct()
            }} className="btn btn-primary">
            Ver mas
        </button>
        {!props.shoppingCart.find(item => item._id === _id) ? (
          <button
            className="btn btn-success ml-1"
            onClick={() => addProduct(props.product)}
            >
            Agregar
          </button>
        ) : (
          <button
            className="btn btn-danger ml-1"
            onClick={() => props.removeFromCart(_id)}
          >
            Remover
          </button>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
  removeFromCart: id => dispatch(removeFromCart(id)),
});

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
