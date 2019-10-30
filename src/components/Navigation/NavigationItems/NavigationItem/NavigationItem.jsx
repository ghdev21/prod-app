import React from 'react';

import classes from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

export default ({ title }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={`/${title}`} className={`${classes.NavigationLink}`} activeClassName={classes.Active} href="/">
      <span className={`icon-${title}`} />
    </NavLink>
  </li>
);
