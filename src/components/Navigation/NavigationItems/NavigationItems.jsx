import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';
import {
  TASK_LIST,
  SETTINGS,
  STATISTIC,
} from '../../../constants/Routes';

export default () => (
  <ul className={classes.Menu}>
    {[TASK_LIST, STATISTIC, SETTINGS].map((item) => <NavigationItem title={item} key={item} />)}
  </ul>
);
