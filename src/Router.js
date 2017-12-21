import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Container, StyleProvider,  Header, Left, Right, Icon, Button, Body, Content } from 'native-base';
import LoginForm from './components/LoginForm';
import PlayersList from './components/PlayersList';
import PlayerPage from './components/PlayerPage';
import AppFooter from './components/appFooter';
import Settings from './components/Settings';

import getTheme from './themes/components';
import OffkeyTheme from './themes/variables/OffkeyTheme';

const RouterComponent = () => {
  return (
    <StyleProvider style={getTheme(OffkeyTheme)}>
      <Container>
        <Router
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarTitle}
          barButtonTextStyle={styles.barButtonTextStyle}
          barButtonIconStyle={styles.barButtonIconStyle}
          >
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main">
              <Scene key="playersList" component={PlayersList} title="Players" />
              <Scene key="playersPage" component={PlayerPage} title="Player" />
              <Scene key="settings" component={Settings} title="Settings" />
            </Scene>
          </Scene>
        </Router>
      </Container>
    </StyleProvider>
  );
};

const styles = {
  navBar: {
    backgroundColor:'#383838'
  },
  navBarTitle: {
    color: 'white'
  },
  barButtonTextStyle: {
    color: 'white'
  },
  barButtonIconStyle: {
    tintColor:'rgb(255,255,255)'
  }
}

export default RouterComponent;
