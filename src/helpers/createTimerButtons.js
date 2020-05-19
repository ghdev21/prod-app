import React from 'react';
import timerButtonsConfig from '../constants/TimerButtonsConfig';
import Button from '../components/UI/Button/Button';

export default ({ mode, finish, start }) => {
  return timerButtonsConfig[mode || 'default'].map((item) => {
    const clickHandler = item.clickHandler === 'start'
      ? start
      : finish;

    return (
      <Button
        key={item.id}
        color={item.color}
        clickHandler={clickHandler}
      >
        {item.text}
      </Button>
    );
  });
};
