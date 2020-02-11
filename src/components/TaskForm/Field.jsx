import React from 'react';
import { connect } from 'react-redux';
import classes from './Form.module.scss';
import * as action from '../../store/actions';
import generateField from '../../helpers/generateField';

const Field = (props) => {
  const isEstimation = props.labelName === 'estimation';
  let content = generateField(props);

  if (props.controlsList) {
    const additionalClass = isEstimation
      ? classes.EstimationBlock
      : null;
    const radioWrapper = isEstimation
      ? classes.EstimationRadioWrapper
      : classes.RadioWrapper;

    content = (
      <div className={[additionalClass, classes.Category].join(' ')}>
        <h4 className={classes.RadioTitle}>{props.labelName}</h4>
        <div className={radioWrapper}>
          {props.controlsList.map((radio) => generateField({ ...props, radio }))}
        </div>
      </div>
    );
  }
  return content;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeTaskListModal: (evt, id, prop) => dispatch(action.changeTaskListModal(evt, id, prop)),
});

export default connect(null, mapDispatchToProps)(Field);
