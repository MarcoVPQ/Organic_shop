import React, { useState } from "react";
import { connect } from "react-redux";

import { loginSuccess } from "../actions/authActions";

const LoginPage = ({ login }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [loginMode, setLoginMode] = useState(true)

  const onsubmitHandler = e => {
    e.preventDefault();
    login();
  };

  return (
    <div className="row mt-2">
      <div className="col-md-6 offset-md-3 text-center  p-5 ms-1">
        <h1>Ingresar</h1>
        <form className="p-2 mt-3" onSubmit={e => onsubmitHandler(e)}>
          <div className="form-group">
            <input 
              className="form-control" 
              type="email" 
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
               />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {
            loginMode 
           ? 
           null
           :
           (
            <div className="form-group">
              <input 
                type="password" 
                className="form-control"
                placeholder="Re-enter password"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={confirmedPassword}
                />
            </div>
            )
    
          }
          <div>
            <button 
             className="btn btn-primary btn-block">
             { loginMode ? 'Enter' : 'Register'}
             </button>
          </div>
        </form>
        <p className="text-primary login-toggle" 
           onClick={() => setLoginMode(!loginMode)}>
           { loginMode ? 'Create Account' : 'Back to login'}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginSuccess())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
