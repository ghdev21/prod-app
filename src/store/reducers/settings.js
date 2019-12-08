import * as actionTypes from '../actions/actionTypes';
import updateObj from '../utility';

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
  return updateObj(state, { settingsArr: newArr });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_SETTINGS:
      return updateObj(state, { settingsArr: [], loading: true });
    case actionTypes.SET_SETTINGS:
      return updateObj(state, { settingsArr: action.settings, loading: false });
    case actionTypes.INCREMENT_SETTINGS:
      return settingControlsHandler(state, action, 'incr');
    case actionTypes.DECREMENT_SETTINGS:
      return settingControlsHandler(state, action, 'decr');
    case actionTypes.SAVE_SETTINGS_START:
      return updateObj(state, { loading: true });
    case actionTypes.SAVE_SETTINGS:
      return updateObj(state, { loading: false });
    default:
      return state;
  }
};
