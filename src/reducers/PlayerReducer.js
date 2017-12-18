import {
  PLAYER_FETCH_SUCCESS,
  PLAYER_SELECT
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYER_FETCH_SUCCESS:
      return action.payload;
    case PLAYER_SELECT:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
