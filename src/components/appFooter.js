import React, { Component } from 'react';
import { Image, Stylesheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {

  constructor(){
    super();
    this.state={activeTabName: 'players'};
  }

  tabAction(tab){
    this.setState({activeTabName: tab})
    if(tab === 'players'){
      Actions.players();
    }
    else if(tab === 'events'){
      Actions.events();
    }
    else {
      Actions.settings();
    }
  }

  render() {
    return (
      <Footer>
          <FooterTab>
            <Button vertical
              active={(this.state.activeTabName=== 'players')? true: '' }
              onPress={() => { this.tabAction('players') }}>
              <Icon name="person" />
              <Text>Players</Text>
            </Button>
            {/* <Button vertical
              active={(this.state.activeTabName=== 'events')? true: '' }
              onPress={() => { this.tabAction('events') }}>
              <Icon name="camera" />
              <Text>Events</Text>
            </Button> */}
            <Button vertical
              active={(this.state.activeTabName=== 'settings')? true: '' }
              onPress={() => { this.tabAction('settings') }}>
              <Icon name="person" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

module.export = AppFooter;
