import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

export default (props) => (
  <ul className={classes.Menu}>
    {['task-list', 'statistic', 'settings'].map((item) => <NavigationItem title={item} key={item} />)}
  </ul>
);
