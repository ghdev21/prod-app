import React from 'react';

import CategoryItem from './CategoryItem';
import classes from './CategoriesList.module.scss';

const categories = [
  'Work',
  'Education',
  'Hobby',
  'Sport',
  'Other',
];

export default () => {
  const categoryList = categories.map((category) => (
    <CategoryItem key={category}>
      {category}
    </CategoryItem>
  ));

  return (
    <ul className={classes.List}>
      {categoryList}
    </ul>
  );
};
