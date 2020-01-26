import React from 'react';
import { connect } from 'react-redux';
import classes from './Backdrop.module.scss';
import * as action from '../../../store/actions';

const Backdrop = ({ onCLoseTaskListModal }) => (
    <div
      className={classes.Backdrop}
      onClick={onCLoseTaskListModal}
    />
);

const mapDispatchToProps = (dispatch) => ({
  onCLoseTaskListModal: () => dispatch(action.onCLoseTaskListModal()),
});

export default connect(null, mapDispatchToProps)(Backdrop);
