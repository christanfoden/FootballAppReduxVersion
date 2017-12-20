import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import firebase from 'firebase';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  // Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';

import { Spinner, CardSection, Button } from './common';
import AppFooter from './appFooter'

export default class Settings extends Component {
  render() {
    return(
      <Container>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    );
  }
}

module.export = Settings;
