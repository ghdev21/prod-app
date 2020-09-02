// @ts-ignore
import uuid from 'uuid/v1';

type Obj = {
  id: string,
  text: string,
  clickHandler: 'start' | 'finish',
  color: string
}

export interface TimerButtonsConfigModel {
  [key: string]: [Obj, Obj] | [Obj],
}

export const timerButtonsConfig = <TimerButtonsConfigModel> {
  break: [
    {
      id: uuid(),
      text: 'Start Pomodora',
      clickHandler: 'start',
      color: 'Green',
    },
    {
      id: uuid(),
      text: 'Finish Tas',
      clickHandler: 'finish',
      color: 'Blue',
    },
  ],
  work: [
    {
      id: uuid(),
      text: 'Fail Pomodora',
      clickHandler: 'finish',
      color: 'Remove',
    },
    {
      id: uuid(),
      text: 'Finish Pomodora',
      clickHandler: 'finish',
      color: 'Green',
    },
  ],
  default: [
    {
      id: uuid(),
      text: 'Start',
      clickHandler: 'start',
      color: 'Green',
    },
  ],
};