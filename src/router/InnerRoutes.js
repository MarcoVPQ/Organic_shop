import React from 'react';
import { Switch, Route} from 'react-router-dom';

import PrivateRoute from './PrivateRoute'
import Catalog from '../components/Catalog/Catalog'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Detail from '../components/Details/Details'

import NotFound from './../components/NotFound';
import Profile from './../components/Profile/Profile';


const InnerRoutes = () => (
    <Switch>
          <div className="container p-4 mt-2">
          <Switch>
            <PrivateRoute path="/products" component={Catalog} />
            <PrivateRoute path="/product/:id" component={Detail} />
            <PrivateRoute path="/shopping-cart" component={ShoppingCart} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Switch>
)

export default InnerRoutes



