import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import settingsReducer from './store/reducers/settings';
import taskListReducer from './store/reducers/taskList';
import timerReducer from './store/reducers/timer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  settings: settingsReducer,
  taskList: taskListReducer,
  timer: timerReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter>
     <App />
   </BrowserRouter>
 </Provider>,
 document.getElementById('root'),
);
