import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image
} from 'react-native';
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
import { Actions } from 'react-native-router-flux';
import YouTube from 'react-native-youtube';

import { CardSection } from './common';

class PlayerItem extends Component {
  onRowPress(){
    Actions.playersPage({ player: this.props.player });
  }

  render(){
    // console.log(this)
    const {
      playerFirstName,
      playerImgUrl,
      playerLastName,
      playerClubCurrent,
      playerPosition,
      playerCountry,
      playerAge,
      playerHeightCms,
      playerWeightKg,
      PlayerDescription
    } = this.props.player

    return(
        <TouchableOpacity onPress={this.onRowPress.bind(this)}>
          {/* <View style={{backgroundColor: '#f8f8f8'}}> */}
            {/* <Card style={{backgroundColor: '#f8f8f8'}}> */}
              <CardItem style={{
                borderRadius: 12,
                backgroundColor: '#383838',
                margin: 10
              }}>
                <Left>
                  <Image source={{ uri: `${playerImgUrl}`}} style={{height: 125, borderRadius: 7, width: null, flex: 1}} />
                  <Body>
                    <Text title style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }} >{playerFirstName} {playerLastName}</Text>
                    <Text note style={{ color: '#f8f8f8'}}>{playerClubCurrent}</Text>
                    <Text note style={{ color: '#f8f8f8'}} >{playerPosition}</Text>
                  </Body>
                </Left>
              </CardItem>
            {/* </Card> */}
          {/* </View> */}
        </TouchableOpacity>
    );
  }
}

export default PlayerItem;
