import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

export default (props) => (
  <ul className={classes.Menu}>
    <NavigationItem title="task-list" />
    <NavigationItem title="statistic" />
    <NavigationItem title="settings" />
  </ul>
);
