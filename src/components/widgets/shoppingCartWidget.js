import React from "react";
import { connect } from "react-redux";

import { addOne, removeOne } from "../../actions/shoppingCartActions";

const ShoppingCartWidget = ({ addOne, removeOne, product, plusOne, minusOne }) => {
  const handleAddition = () => {
    addOne(product._id);
    plusOne();
  };

  const handleSubstraction = () => {
    removeOne(product._id)
    minusOne();
  };

  return (
    <React.Fragment>
      <span
        className="btn btn-success "
        style={{ cursor: "pointer", fontSize: "16px", margin: "0 5px" }}
        onClick={() => handleSubstraction()}
      >
        <i className="fa fa-minus" aria-hidden="true" />
      </span>
      <span
        className="btn btn-info "
        style={{ cursor: "pointer", fontSize: "16px", margin: "0 5px" }}
        onClick={() => handleAddition()}
      >
        <i className="fa fa-plus" aria-hidden="true" />
      </span>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  addOne: id => dispatch(addOne(id)),
  removeOne: id => dispatch(removeOne(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(ShoppingCartWidget);
