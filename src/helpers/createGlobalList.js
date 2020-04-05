import React from 'react';
import { curry } from 'ramda';
import classes from '../components/Tasks/Task.module.scss';

export default curry((fn, el) => {
  const { categoryName, data } = el;
  let categoryList = null;

  if (data.length) {
    categoryList = (
      <div
        className={`${classes.CategoryList} ${classes[categoryName]}`}
        key={categoryName}
      >
        <span className={`${classes.Circle} ${classes[categoryName]}`} />
        <h3 className={`${classes.Title} ${classes[categoryName]}`}>{categoryName}</h3>
        {fn(data)}
      </div>
    );
  }

  return categoryList;
});
