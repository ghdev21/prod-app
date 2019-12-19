import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import classes from './Header.module.scss';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import throttle from '../../helpers/throttle';

export default () => {
  const [fixedHeader, fixedHeaderHandler] = useState(false);
  const classNames = fixedHeader ? [classes.Header, classes.Fixed] : [classes.Header];
  const getScroll = () => {
    const isScroll = window.pageYOffset > 50;
    if (isScroll !== fixedHeader) {
      fixedHeaderHandler(isScroll);
    }
  };
  const scroll = throttle(getScroll, 300);
  useEffect(() => {
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  });

  return (
    <header className={classNames.join(' ')}>
      <div className={classes.HeaderWrapper}>
        <Logo shown={fixedHeader} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </header>
  );
};
