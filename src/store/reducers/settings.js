import * as actionTypes from '../actions/actionTypes';

const initialState = {
  settingsArr: [],
  loading: true,
};

const settingControlsHandler = (state, action, dir) => {
  const settingsItem = state.settingsArr.find((setting) => setting.name === action.name);
  const {
    value, min, max, step,
  } = settingsItem;
  if (dir === 'decr' && value > min) {
    settingsItem.value -= step;
  }
  if (dir === 'incr' && value < max) {
    settingsItem.value += step;
  }
  const newArr = [...state.settingsArr];
  newArr[settingsItem] = settingsItem;
  return { ...state, settingsArr: newArr };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_SETTINGS:
      return { ...state, settingsArr: [], loading: true };

    case actionTypes.SET_SETTINGS:
      return { ...state, settingsArr: action.settings, loading: false };

    case actionTypes.INCREMENT_SETTINGS:
      return settingControlsHandler(state, action, 'incr');

    case actionTypes.DECREMENT_SETTINGS:
      return settingControlsHandler(state, action, 'decr');

    case actionTypes.START_SAVE_SETTINGS:
      return { ...state, loading: true };

    case actionTypes.SAVE_SETTINGS:
      return { ...state, loading: false };

    default:
      return state;
  }
};
