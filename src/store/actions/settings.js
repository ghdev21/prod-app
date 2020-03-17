import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setSettings = (settings) => ({
  type: actionTypes.SET_SETTINGS.HAS_FETCHED,
  settings,
});

export const saveSettings = () => ({
  type: actionTypes.SAVE_SETTINGS.HAS_FETCHED,
});

export const initSettings = () => (dispatch) => {
  axios.get('/settings.json')
    .then((res) => dispatch(setSettings(res.data)))
    .catch((err) => console.log(err));
};

export const resetSettings = () => ({
  type: actionTypes.RESET_SETTINGS.HAS_FETCHED,
});

export const incrementSettings = (name) => ({
  type: actionTypes.INCREMENT_SETTINGS.HAS_FETCHED,
  name,
});

export const decrementSettings = (name) => ({
  type: actionTypes.DECREMENT_SETTINGS.HAS_FETCHED,
  name,
});

export const updateSettings = (settings) => (dispatch) => {
  dispatch({ type: actionTypes.SAVE_SETTINGS.IS_FETCHING });
  axios.put('/settings.json', settings)
    .then(() => dispatch(saveSettings()))
    .catch((err) => console.log(err));
};
