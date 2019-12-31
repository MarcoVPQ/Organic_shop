import React from "react";
import { Link } from "react-router-dom";

const SectionFooter = props => (
  <React.Fragment>
    <hr />
    <div className="row">
      <Link className="btn btn-outline-primary m-auto" to="/products">
        Regresar
      </Link>
    </div>
  </React.Fragment>
);

export default SectionFooter;
