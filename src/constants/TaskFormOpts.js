const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
export default () => [
  {
    labelName: 'Title',
    placeholder: 'Add title here',
    type: 'text',
    value: '',
  },
  {
    labelName: 'Description',
    placeholder: 'Add description here',
    type: 'text',
    value: '',
  },
  {
    labelName: 'Category',
    placeholder: null,
    type: 'radio',
    value: 'Work',
    checked: 'Work',
    controlsList: [
      'Work',
      'Education',
      'Hobby',
      'Sport',
      'Other',
    ],
  },
  {
    labelName: 'Deadline',
    type: 'date',
    value: getFormattedDate(new Date()),
  },
  {
    labelName: 'Estimation',
    type: 'radio',
    value: '1',
    checked: '1',
    controlsList: ['1', '2', '3', '4', '5'],
  },
  {
    labelName: 'Priority',
    type: 'radio',
    value: 'Urgent',
    checked: 'Urgent',
    controlsList: ['Urgent', 'High', 'Middle', 'Low'],
  },
];
