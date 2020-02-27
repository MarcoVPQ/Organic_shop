import React from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'

import Topbar from '../components/Topbar'
import LoginPage from '../components/LoginPage'
import InnerRoutes from './InnerRoutes';

import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (

  <Router history={history}>

      <div className="store">
        <Topbar />
        <Switch>
          <PublicRoute path="/" component={LoginPage} exact={true} />
          <Route component={InnerRoutes} />
        </Switch>
    </div>

  </Router>
)

export default AppRouter
