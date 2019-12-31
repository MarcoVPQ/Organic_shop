import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'

import Topbar from '../components/Topbar'
import LoginPage from '../components/LoginPage'
import Catalog from '../components/Catalog/Catalog'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import Detail from '../components/Details/Details'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import NotFound from './../components/NotFound';

export const history = createHistory();

const AppRouter = () => (

  <Router history={history}>

      <div className="store">
        <Topbar />
        <div className="container p-4 mt-2">
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/products" component={Catalog} />
            <PrivateRoute path="/product/:id" component={Detail} />
            <PrivateRoute path="/shopping-cart" component={ShoppingCart} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </div>

  </Router>
)

export default AppRouter
