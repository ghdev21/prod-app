import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHeading from '../../components/PageHeading/PageHeading';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Tabs from '../../components/Tabs/Tabs';
import SettingsRouter from '../../Router/SettingsRouter';
import NotFound from '../NotFound/NotFound';
import {
  POMODOROS,
  CATEGORIES,
  RESOLVED_ROUTES,
} from '../../constants/Routes';
import classes from './Settings.module.scss';

export default withRouter(({ location }) => {
  const isResolved = RESOLVED_ROUTES.find((item) => item === location.pathname);
  let Component = (
    <Auxiliary>
      <PageHeading title="Settings" />
      <div className={classes.Wrapper}>
        <Tabs elements={[POMODOROS, CATEGORIES]} />
        <SettingsRouter />
      </div>
    </Auxiliary>
  );
  if (!isResolved) {
    Component = <NotFound />;
  }
  return Component;
});
