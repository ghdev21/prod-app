import React from 'react';
import { connect } from 'react-redux';
import classes from './Backdrop.module.scss';
import * as action from '../../../store/actions';

const Backdrop = ({ onCLose }) => (
    <div
      className={classes.Backdrop}
      onClick={onCLose}
    />
);

const mapDispatchToProps = (dispatch) => ({
  onCLose: () => dispatch(action.cLoseTaskListModal()),
});

export default connect(null, mapDispatchToProps)(Backdrop);
