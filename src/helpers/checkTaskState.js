import { messages } from '../constants/Texts';
import listSettings from '../assets/images/tomato_settings.svg';
import tomatoFirst from '../assets/images/tomato-first.svg';
import addTask from '../assets/images/tomato-add.svg';

export default (str) => {
  const properties = { icon: listSettings, text: messages.firstVisit };
  switch (str) {
    case 'firstVisit':
      return properties;

    case 'firstTask':
      properties.icon = tomatoFirst;
      properties.text = messages.firstTask;
      return properties;

    default:
      properties.icon = addTask;
      properties.text = messages.noTasks;
      return properties;
  }
};
