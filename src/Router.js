import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Container, StyleProvider,  Header, Left, Right, Icon, Button, Body } from 'native-base';
import LoginForm from './components/LoginForm';
import PlayersList from './components/PlayersList';
import AppFooter from './components/appFooter';

import getTheme from './themes/components';
import OffkeyTheme from './themes/variables/OffkeyTheme';


const RouterComponent = () => {
  return (
    <StyleProvider style={getTheme(OffkeyTheme)}>
      <Container>
        <Router sceneStyle={{}}>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
              <Scene key="playersList" component={PlayersList} title="Players" />
            </Scene>
          </Scene>
        </Router>
      </Container>
    </StyleProvider>
  );
};

export default RouterComponent;
