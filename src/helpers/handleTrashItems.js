import uniq from 'ramda/src/uniq';

export default (state, payload) => {
  const { ids, isSelected } = payload;
  const shouldBeDeleteItemsCopy = [...state.shouldBeDeleteItems];
  let updatedArray = uniq([...shouldBeDeleteItemsCopy, ...ids]);

  if (isSelected) {
    updatedArray = shouldBeDeleteItemsCopy.filter((item) => !ids.find((id) => item === id));
  }

  return { ...state, shouldBeDeleteItems: updatedArray };
};
