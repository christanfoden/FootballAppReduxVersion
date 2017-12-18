import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import PlayersList from './components/PlayersList';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAkn-IxM8CC0f7vJ1DtBverCS6cqLi_4hQ',
      authDomain: 'tmgfootball-a704b.firebaseapp.com',
      databaseURL: 'https://tmgfootball-a704b.firebaseio.com',
      projectId: 'tmgfootball-a704b',
      storageBucket: 'tmgfootball-a704b.appspot.com',
      messagingSenderId: '800565118975'
    };
    firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  console.log(this);
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
};

export default App;
