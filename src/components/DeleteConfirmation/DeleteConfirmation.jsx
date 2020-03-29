import React from 'react';
import { useDispatch } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import Button from '../UI/Button/Button';
import * as action from '../../store/actions/index';
import classes from './DeleteConfirmation.module.scss';

export default ({ elements, loading }) => {
  const dispatch = useDispatch();
  const declineDelete = () => dispatch(action.declineDeleting());
  const removeTasks = () => dispatch(action.deleteTask(...elements));

  return (
    <div className={classes.Container}>
      {
        loading
          ? <Spinner />
          : (
            <>
              <h2 className={classes.Title}>Remove Task</h2>
              <p className={classes.Message}>Are you sure you want to remove selected task(s)?</p>
             <div className={classes.ButtonWrapper}>
               <Button
                 color="Blue"
                 clickHandler={declineDelete}
               >
                 Cancel
               </Button>
               <Button
                 color="Remove"
                 clickHandler={removeTasks}
               >
                 Remove
               </Button>
             </div>
              <button
                onClick={declineDelete}
                className={`${classes.Close} icon-close`}
              />
            </>
          )
      }
    </div>
  );
};
