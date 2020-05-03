import React, {lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskList from '../containers/TaskList/TaskList';
import Settings from '../containers/Settings/Settings';
import Statistic from '../containers/Statistic/Statistic';
import ProtectedRoute from './ProtectedRoute';
import Login from '../containers/Login/Login';
import NotFound from '../containers/NotFound/NotFound';
import {
  TASK_LIST,
  SETTINGS,
  STATISTIC,
  TIMER,
  LOGIN,
} from '../constants/Routes';
import Spinner from '../components/UI/Spinner/Spinner';

const Timer = lazy(() => import('../containers/Timer/Timer'));

export default () => (
  <Switch>
    <ProtectedRoute path={`/${TASK_LIST}`} component={TaskList} />
    <ProtectedRoute path={`/${SETTINGS}`} component={Settings} />
    <ProtectedRoute path={`/${STATISTIC}`} component={Statistic} />
    <Route path={`/${TIMER}/:id`} render={() => (
      <Suspense fallback={Spinner()}>
        <Timer />
      </Suspense>
    )} />
    <Route path={`/${LOGIN}`} component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);
