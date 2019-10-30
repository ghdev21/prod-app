import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import TaskList from './containers/TaskList/TaskList';
import Settings from './containers/Settings/Settings';
import Statistic from './containers/Statistic/Statistic';

export default (props) => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/task-list" component={TaskList} />
          <Route path="/settings" component={Settings} />
          <Route path="/statistic" component={Statistic} />
          <Redirect from="/" to="/task-list" />
        </Switch>
      </Layout>
    </div>
  );
};
