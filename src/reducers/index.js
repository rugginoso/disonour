import { combineReducers } from 'redux';
import teams from './teams.js';
import topDisonoured from './topDisonoured.js';

export default combineReducers({
  teams,
  topDisonoured,
});
