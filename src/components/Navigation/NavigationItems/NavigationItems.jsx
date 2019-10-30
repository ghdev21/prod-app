import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

export default (props) => (
  <ul className={classes.Menu}>
    <NavigationItem title="settings" />
    <NavigationItem title="task-list" />
    <NavigationItem title="statistic" />
  </ul>
);
