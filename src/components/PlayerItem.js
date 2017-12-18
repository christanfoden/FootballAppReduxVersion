import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image
} from 'react-native';
import { CardSection } from './common';

class PlayerItem extends Component {
  render(){
    console.log(this)
    const { playerFirstName, playerImgUrl } = this.props.player

    return(
      <CardSection>
        <Text>
          {playerFirstName}
        </Text>
        <Image source={{uri: `${this.props.player.playerImgUrl}`}} style={{ height: 50, width: null, flex: 1 }}/>
      </CardSection>
    );
  }
}

export default PlayerItem;
