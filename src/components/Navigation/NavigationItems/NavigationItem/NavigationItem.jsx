import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../../../store/actions';
import classes from './NavigationItem.module.scss';
import { SETTINGS, POMODOROS, TASK_LIST } from '../../../../constants/Routes';

export default withRouter(({ title, location }) => {
  const isDeleteMode = useSelector(state => state.taskList.isDeleteMode);
  const activeClass = isDeleteMode ? '' : classes.Active;
  const locationPath = location.pathname.split('/');
  let handler = null;
  let path = title === SETTINGS ? `${title}/${POMODOROS}` : title;
  if (title === SETTINGS && locationPath.length > 2) {
    path = `${title}/${locationPath[locationPath.length - 1]}`;
  }
  if (title === TASK_LIST) {
    const dispatch = useDispatch();
    handler = () => dispatch(action.disableDeleteMode());
  }

  return (
    <li className={classes.NavigationItem}>
      <NavLink
        to={`/${path}`}
        onClick={handler}
        className={`${classes.NavigationLink}`}
        activeClassName={activeClass}
      >
        <span className={`icon-${title}`} />
      </NavLink>
    </li>
  );
});
