import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classes from './Tabs.module.scss';

export default withRouter(({ elements, match }) => (
  <ul className={classes.Tabs}>
    {elements.map((elem, id) => {
      const splitedPath = `${match.path}/${elem}`;
      return (
        <li className={classes.TabsItem} key={elem + id}>
          <NavLink
            activeClassName={classes.Active}
            className={classes.TabsLink}
            to={splitedPath} >
            {elem}
          </NavLink>
        </li>
      );
    })}
  </ul>
));
