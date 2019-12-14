import React from 'react';
import classes from './PageHeading.module.scss';

export default ({ title }) => (
  <section className={classes.HeadingContainer}>
    <h2 className={classes.Title}>{title}</h2>
  </section>
);
