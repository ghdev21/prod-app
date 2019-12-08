import React from 'react';

import { connect } from 'react-redux';
import classes from './SettingsControl.module.scss';
import * as actions from '../../../store/actions';

const SettingsControl = ({
  title,
  name,
  value,
  text,
  onIncrement,
  onDecrement
}) => {
  const settingsWord = name !== 'iteration' ? ' minutes' : ' iterations';
  const categoryName = [classes.Label];
  switch (name) {
    case ('iteration'):
      categoryName.push(classes.Iteration);
      break;
    case ('shortBreak'):
      categoryName.push(classes.ShortBreak);
      break;
    case ('longBreak'):
      categoryName.push(classes.LongBreak);
      break;
    default:
      categoryName.push(classes.Work);
  }
  return (
    <div className={classes.SettingsControl}>
      <label className={categoryName.join(' ')} htmlFor={name}>
        {title}
      </label>
      <div className={classes.ControlsWrapper}>
        <button
          className="icon-minus"
          onClick={(evt) => {
            evt.preventDefault();
            onDecrement(name);
          }}
        />
        <input className={classes.Input} type="text" value={value} readOnly name={name} />
        <button
          className="icon-add"
          onClick={(evt) => {
            evt.preventDefault();
            onIncrement(name);
          }}
        />
      </div>
      <p className={classes.ControlDescription}>
        {text}
        <span>{settingsWord}</span>
      </p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (name) => dispatch(actions.incrementSettings(name)),
  onDecrement: (name) => dispatch(actions.decrementSettings(name)),
});

export default connect(null, mapDispatchToProps)((SettingsControl));
