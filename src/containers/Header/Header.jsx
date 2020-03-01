import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import HeaderButtons from '../../components/UI/Button/HeaderButtons';
import { TASK_LIST } from '../../constants/Routes';
import classes from './Header.module.scss';

export default withRouter(({ location }) => {
  const { pathname } = location;
  const isTaskList = pathname === `/${TASK_LIST}`;
  const [isFixedHeader, fixedHeaderHandler] = useState(false);
  const headerClasses = isFixedHeader ? [classes.Header, classes.Sticky] : [classes.Header];
  const getScroll = () => {
    const isScroll = window.pageYOffset > 50;
    fixedHeaderHandler(isScroll);
  };

  useEffect(() => window.addEventListener('scroll', getScroll), []);

  return (
    <header className={headerClasses.join(' ')}>
      <div className={classes.HeaderWrapper}>
        <Logo shown={isFixedHeader} />
        <div className={classes.Actions}>
          {isTaskList && <HeaderButtons fixed={isFixedHeader} />}
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>
    </header>
  );
});
