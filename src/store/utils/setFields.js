import taskForm from '../../constants/TaskFormOpts';

export default (state, data) => {
  const {
    title,
    description,
    category,
    deadline,
    priority,
    estimation,
    fireBaseId,
  } = data;

  const formData = taskForm(title, description, category, deadline, estimation, priority);

  return {
    ...state,
    taskFormOpts: formData,
    isModalOpen: true,
    editableTask: fireBaseId,
  };
};
