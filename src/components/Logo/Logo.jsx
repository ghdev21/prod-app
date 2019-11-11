import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import classes from './Logo.module.scss';

export default (props) => (
  <a className={classes.Logo} href="/">
    <img src={Logo} alt="Logo" />
  </a>
);
