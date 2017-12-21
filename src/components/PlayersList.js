import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { ListView, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
  Right,
  Deckswiper
} from 'native-base';
import { connect } from 'react-redux';
import PlayerItem from './PlayerItem';
import AppFooter from './appFooter';
import { playersFetch, playerSelect } from '../actions/'
import { Button } from './common';

class PlayersList extends Component {
  componentWillMount() {
    this.props.playersFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this componentWillMount
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps)
  }

  createDataSource({ players }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(players);
  }

  renderRow(players) {
    return (
      <TouchableWithoutFeedback>
        <PlayerItem player={players}/>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    // console.log(this);

    return (
      <Content>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        {/* <CardItem style={{backgroundColor: '#383838', alignSelf: 'center', width: null}}>
          <Button
            onPress={() => firebase.auth().signOut()}
            bordered
            full
            >
            <Text>
              Log Out
            </Text>
          </Button>
        </CardItem> */}
      </Content>
    );
  }
}

const mapStateToProps = state => {
  const players = _.map(state.players, (val, uid) => {
    return { ...val, uid };
  });

  return { players };
};

export default connect(mapStateToProps, { playersFetch, playerSelect })(PlayersList);
