import React from 'react';
import classes from './SettingsControl.module.scss';

export default ({
  title,
  name,
  value,
  range,
  text,
  increment,
  decrement,
}) => {
  const settingsWord = name !== 'iteration' ? ' minutes' : ' iterations';
  const { min, max } = range;
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
          disabled={value === min}
          onClick={(evt) => {
            evt.preventDefault();
            decrement(name);
          }}
        />
        <input className={classes.Input} type="text" value={value} readOnly name={name} />
        <button
          className="icon-add"
          disabled={value === max}
          onClick={(evt) => {
            evt.preventDefault();
            increment(name);
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
