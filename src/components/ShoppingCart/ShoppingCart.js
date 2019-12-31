import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

import ShoppingCartList from "./ShoppingCartList";
import SectionFooter from "../widgets/SectionFooter";

import { totalGenerator } from "../../utils/totalGenerator";
import { emptyCart } from "../../actions/shoppingCartActions";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity .3s'
  }
}


const ShoppingCart = ({ shoppingCart, total, history, emptyCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clearCart = () => {
    emptyCart();
    history.push("/products");
  };

  return (
    <React.Fragment>
      <h1>Carrito</h1>
      <div className="row" style={{ minHeight: "20rem" }}>
        {shoppingCart.length > 0 ? (
          <Fragment>
            <ShoppingCartList />
            <div className="col-md-6 py-4">
              <h3>Total : ${total}</h3>
              <div className="mt-5">
                <button className="btn btn-primary m-1">Pagar</button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => setIsModalOpen(true)}
                >
                  Cancelar
                </button>
              </div>
            </div>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              closeTimeoutMS={200}
              style={customStyles}
            >
              <div className="row">
                <div className="col-xs-12 p-5">
                  <h4>Quieres cancelar tu compra ?</h4>
                  <button className="btn btn-danger m-1" onClick={clearCart}>
                    Si
                  </button>
                  <button className="btn btn-primary m-1" onClick={closeModal}>
                    No
                  </button>
                </div>
              </div>
            </Modal>
          </Fragment>
        ) : (
          <div className="col-md-12 py-4 text-center">
            <h3>Tu carrito esta vacio</h3>
          </div>
        )}
      </div>
      <SectionFooter />
    </React.Fragment>
  );
};

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart,
  total: totalGenerator(shoppingCart)
});

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
