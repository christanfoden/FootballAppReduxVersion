import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PLAYER_FETCH_SUCCESS,
  PLAYER_SELECT
} from './types';

export const playerSelect = ({ props, value }) => {
  return {
    type: PLAYER_SELECT,
    payload: { props, value }
  };
};

export const playersFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/`)
      .on('value', snapshot => {
        dispatch({ type: PLAYER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  }
};
