import React from 'react';
import PageHeading from '../../components/PageHeading/PageHeading';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Tabs from '../../components/Tabs/Tabs';
import SettingsRouter from '../../router/SettingsRouter';
import {
  POMODOROS,
  CATEGORIES,
} from '../../constants/Routes';
import classes from './Settings.module.scss';
import ResolveRoute from '../../hoc/ResolveRoutes/ResolveRoute';

export default () => (
  <ResolveRoute>
    <Auxiliary>
      <PageHeading title="Settings" />
      <div className={classes.Wrapper}>
        <Tabs elements={[POMODOROS, CATEGORIES]} />
        <SettingsRouter />
      </div>
    </Auxiliary>
  </ResolveRoute>
);
