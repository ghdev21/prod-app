import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TaskList from '../containers/TaskList/TaskList';
import Settings from '../containers/Settings/Settings';
import Statistic from '../containers/Statistic/Statistic';
import ProtectedRoute from './protectedRoute';
import Login from '../containers/Login/Login';
import NotFound from '../containers/NotFound/NotFound';

export default (props) => (
  <Switch>
    <ProtectedRoute path="/task-list" component={TaskList} />
    <ProtectedRoute path="/settings" component={Settings} />
    <ProtectedRoute path="/statistic" component={Statistic} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);
