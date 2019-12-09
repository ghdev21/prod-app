import React from 'react';

import {
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import PomodorosSettings from '../components/SettingsPomodoros/SettingsPomodoros';
import CategoryList from '../components/SettingsCategories/Categories';
import { POMODOROS, CATEGORIES } from '../constants/Routes';

export default withRouter(({ match }) => (
  <Switch>
    <Route path={`${match.path}/${POMODOROS}`} exact component={PomodorosSettings} />
    <Route path={`${match.path}/${CATEGORIES}`} exact component={CategoryList} />
    <Redirect from={`${match.path}`} exact to={`${match.path}/${POMODOROS}`} component={PomodorosSettings} />
  </Switch>
));
