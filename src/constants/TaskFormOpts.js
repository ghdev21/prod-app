const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
export default (
  title = '',
  desc = '',
  category = 'Work',
  date = getFormattedDate(new Date()),
  estimation = '1',
  priority = 'Urgent',
) => [
  {
    labelName: 'title',
    placeholder: 'Add title here',
    type: 'text',
    value: title,
  },
  {
    labelName: 'description',
    placeholder: 'Add description here',
    type: 'text',
    value: desc,
  },
  {
    labelName: 'category',
    placeholder: null,
    type: 'radio',
    value: category,
    checked: category,
    controlsList: [
      'Work',
      'Education',
      'Hobby',
      'Sport',
      'Other',
    ],
  },
  {
    labelName: 'deadline',
    type: 'date',
    value: date,
  },
  {
    labelName: 'estimation',
    type: 'radio',
    value: estimation,
    checked: estimation,
    controlsList: ['1', '2', '3', '4', '5'],
  },
  {
    labelName: 'priority',
    type: 'radio',
    value: priority,
    checked: priority,
    controlsList: ['Urgent', 'High', 'Middle', 'Low'],
  },
];
