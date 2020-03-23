import React from 'react';
import classes from './Form.module.scss';

export default ({
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
  const radioClasses = (labelName === 'estimation' && radio === checked)
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
      <h4 className={classes.RadioTitle}>{labelName !== 'estimation' && identifier}</h4>
      {input}
    </label>
  );
};
