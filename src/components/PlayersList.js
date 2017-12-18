import React, { Component } from 'react';
import { ListView, Text, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
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
      <TouchableOpacity onPress={() => this.props.playerSelect()}>
        <PlayerItem player={players}/>
        <Text>ok</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this);

    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
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
