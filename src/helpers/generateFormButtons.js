import uuid from 'uuid/v1';
import classes from '../components/TaskForm/Form.module.scss';

export default (isEdit, handlers) => {
  const [cancelHandler, saveHandler, deleteHandler] = handlers;
  const formButtons = [
    {
      id: uuid(),
      classes: `${classes.Button} icon-close`,
      handler: cancelHandler,
    },
    {
      id: uuid(),
      classes: `${classes.Button} icon-check`,
      handler: saveHandler,
    },
  ];

  if (isEdit) {
    formButtons.unshift(
      {
        id: uuid(),
        classes: `${classes.Button} ${classes.DeleteButton} icon-trash`,
        handler: deleteHandler,
      },
    );
  }

  return formButtons;
};
