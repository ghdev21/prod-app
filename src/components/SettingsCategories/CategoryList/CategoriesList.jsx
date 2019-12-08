import React from 'react';

import uuid from 'uuid';
import CategoryItem from './CategoryItem';
import classes from './CategoriesList.module.scss';

export default (props) => {
  const categories = [
    'Work',
    'Education',
    'Hobby',
    'Sport',
    'Other',
  ];
  const categoryList = categories.map((category) => (
    <CategoryItem key={uuid()}>
      {category}
    </CategoryItem>
  ));

  return (
    <ul className={classes.List}>
      {categoryList}
    </ul>
  );
};
