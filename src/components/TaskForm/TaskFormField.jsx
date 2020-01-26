import React from 'react';

import { connect } from 'react-redux';
import classes from './TaskForm.module.scss';
import * as action from '../../store/actions';

const generateField = ({
  type,
  radio,
  labelName,
  checked,
  value,
  placeholder,
  onChangeTaskListModal,
}) => {
  const identifier = (type === 'radio')
    ? radio
    : labelName;
  const radioClasses = (labelName === 'Estimation' && radio === checked)
    ? [classes.Label, classes.CheckedTomato]
    : [classes.Label];
  const input = type === 'radio'
    ? (
      <>
        <input
          className={classes.RadioInput}
          onChange={(evt) => onChangeTaskListModal(evt, labelName, 'checked')}
          type={type}
          value={identifier}
          checked={radio === checked}
        />
        <span className={classes[identifier]} />
      </>
    )
    : (
      <input
        onChange={(evt) => onChangeTaskListModal(evt, labelName, 'value')}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    );

  if (radio === checked) {
    radioClasses.push(classes.Selected);
  }

  return (
    <label className={radioClasses.join(' ')} key={identifier}>
      <h4 className={classes.RadioTitle}>{labelName !== 'Estimation' && identifier}</h4>
      {input}
    </label>
  );
};

const TaskFormField = React.memo((props) => {
  const isEstimation = props.labelName === 'Estimation';
  let content = generateField(props);

  if (props.controlsList) {
    const additionalClass = isEstimation
      ? classes.EstimationBlock
      : null;
    const radionWrapper = isEstimation
      ? classes.EstimationRadioWrapper
      : classes.RadioWrapper;

    content = (
      <div className={[additionalClass, classes.Category].join(' ')}>
        <h4 className={classes.RadioTitle}>{props.labelName}</h4>
        <div className={radionWrapper}>
          {props.controlsList.map((radio) => generateField({ ...props, radio }))}
        </div>
      </div>
    );
  }
  return content;
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTaskListModal: (evt, id, prop) => dispatch(action.onChangeTaskListModal(evt, id, prop)),
});

export default connect(null, mapDispatchToProps)(TaskFormField);
