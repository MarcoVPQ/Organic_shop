import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";



import  LoggedInLinks  from './LoggedInLinks'

const Topbar = ({  isLogged }) => {

  const [isCollapse, setIsCollapse] = useState(false)
 
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/products">
          Organic-E-Shop
        </Link>
      
        {isLogged &&
         <React.Fragment>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setIsCollapse(!isCollapse)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <LoggedInLinks isCollapse={isCollapse}  />
         </React.Fragment>
        }
     </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged
});


export default connect(
  mapStateToProps,
  undefined
)(Topbar);
