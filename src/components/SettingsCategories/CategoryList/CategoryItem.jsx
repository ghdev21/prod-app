import React from 'react';

import classes from './CategoriesList.module.scss';

export default ({ children }) => (
  <li className={[classes.ListItem, classes[children]].join(' ')}>
    <span>{children}</span>
  </li>
);
