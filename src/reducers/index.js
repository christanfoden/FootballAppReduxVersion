import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlayerReducer from './PlayerReducer';

export default combineReducers({
  players: PlayerReducer,
  auth: AuthReducer,
});
