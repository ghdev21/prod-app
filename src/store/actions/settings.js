import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setSettings = (settings) => ({
  type: actionTypes.SET_SETTINGS,
  settings,
});

export const saveSettings = () => ({
  type: actionTypes.SAVE_SETTINGS,
});

export const initSettings = () => (dispatch) => {
  axios.get('/settings.json')
    .then((res) => dispatch(setSettings(res.data)))
    .catch((err) => console.log(err));
};

export const resetSettings = () => ({
  type: actionTypes.RESET_SETTINGS,
});

export const incrementSettings = (name) => ({
  type: actionTypes.INCREMENT_SETTINGS,
  name,
});

export const updateSettings = (settings) => (dispatch) => {
  dispatch({ type: actionTypes.START_SAVING_SETTINGS });
  axios.put('/settings.json', settings)
    .then(() => dispatch(saveSettings()))
    .catch((err) => console.log(err));
};

export const decrementSettings = (name) => ({
  type: actionTypes.DECREMENT_SETTINGS,
  name,
});
