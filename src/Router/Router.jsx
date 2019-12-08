import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TaskList from '../containers/TaskList/TaskList';
import Settings from '../containers/Settings/Settings';
import Statistic from '../containers/Statistic/Statistic';
import ProtectedRoute from './protectedRoute';
import Login from '../containers/Login/Login';
import NotFound from '../containers/NotFound/NotFound';
import {
  TASK_LIST,
  SETTINGS,
  STATISTIC,
  LOGIN,
} from '../constants/Routes';

export default (props) => (
  <Switch>
    <ProtectedRoute path={`/${TASK_LIST}`} component={TaskList} />
    <ProtectedRoute path={`/${SETTINGS}`} component={Settings} />
    <ProtectedRoute path={`/${STATISTIC}`} component={Statistic} />
    <Route path={`/${LOGIN}`} component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);
