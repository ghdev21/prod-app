import uuid from 'uuid/v1';

export default {
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
