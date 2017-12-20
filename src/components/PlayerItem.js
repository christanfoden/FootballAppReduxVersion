import React, { Component } from 'react';
import {
  Text,
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
      // <Container>
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
          <View>
            <Card>
              <CardItem>
                <Left>
                  <Image source={{ uri: `${playerImgUrl}`}} style={{height: 100, width: null, flex: 1}}>
                    <Text>{playerFirstName}</Text>
                  </Image>
                  <Body>
                    <Text title style={{ fontWeight: 'bold', fontSize: 15 }} >{playerFirstName} {playerLastName}</Text>
                    <Text note >{playerClubCurrent}</Text>
                    <Text note style={{ color: 'grey'}} >{playerPosition}</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      // </Container>
    );
  }
}

export default PlayerItem;
