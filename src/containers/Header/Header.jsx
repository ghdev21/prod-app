import React from 'react';
import Logo from '../../components/Logo/Logo';
import classes from './Header.module.scss';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

export default (props) => (
  <header className={classes.Header}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);
