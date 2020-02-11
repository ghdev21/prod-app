import React from 'react';

import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.svg';
import classes from './Logo.module.scss';

export default ({ shown }) => (
  <Link className={shown ? classes.Logo : classes.LogoHidden} to="/task-list">
    <img src={Logo} alt="Logo" />
  </Link>
);
