import React, { useEffect, useState } from 'react';
import Logo from '../../components/Logo/Logo';
import classes from './Header.module.scss';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

export default () => {
  const [fixedHeader, fixedHeaderHandler] = useState(false);
  const headerClasses = fixedHeader ? [classes.Header, classes.Sticky] : [classes.Header];
  const getScroll = () => {
    const isScroll = window.pageYOffset > 50;
    fixedHeaderHandler(isScroll);
  };
  useEffect(() => window.addEventListener('scroll', getScroll), []);
  return (
    <header className={headerClasses.join(' ')}>
      <div className={classes.HeaderWrapper}>
        <Logo shown={fixedHeader} />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </header>
  );
};
