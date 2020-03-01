import React  from 'react';
import { NavLink, Route } from 'react-router-dom';


import AccountInfo from './AccountInfo';
import OrderList from './OrderList';

const Profile = () => {
    return (
        <React.Fragment>
            <div className="row py-3">
                <div className="col">
                    <h1>Cuenta</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink 
                             to="/profile" 
                             className="nav-link"
                             activeClassName="active"
                             exact
                             >
                             Informacion de tu cuenta
                            </NavLink>
                        </li>
                         <li className="nav-item">
                             <NavLink 
                              to="/profile/orders" 
                              className="nav-link"
                              activeClassName="active"
                              >
                              Tus ordenes
                             </NavLink>
                        </li>
                    </ul>
                    <Route path={'/profile'} component={AccountInfo} exact/>
                    <Route path={'/profile/orders'} component={OrderList} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;
