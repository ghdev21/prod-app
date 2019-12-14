import React, { Fragment } from 'react';

import { withRouter } from 'react-router-dom';
import SubTitle from '../SubTItle/SubTitle';
import CategoriesList from './CategoryList/CategoriesList';
import Button from '../UI/Button/Button';
import classes from './CategoryList/CategoriesList.module.scss';
import { TASK_LIST } from '../../constants/Routes';

export default withRouter(({ history }) => {
  const redirectToTasks = () => {
    history.push(`/${TASK_LIST}`);
  };
  return (
    <Fragment>
      <SubTitle subTitle="Categories list overview" />
      <CategoriesList />
      <div className={classes.ButtonWrapper}>
        <Button
          color="Blue"
          clickHandler={redirectToTasks}
        >
          Go to Tasks
        </Button>
      </div>
    </Fragment>
  );
});
