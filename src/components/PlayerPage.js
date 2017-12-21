import React, { Component } from 'react';
import { ListView, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
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
import YouTube from 'react-native-youtube';
import PlayerItem from './PlayerItem';
import AppFooter from './appFooter';
import { playersFetch } from '../actions/'

class PlayerPage extends Component {
  render() {
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
      PlayerDescription,
      PlayerYoutubePlaylistId,
      playerClubLogo
    } = this.props.player
    console.log(this.props);

    return(
      <Container>
        <Content style={{ backgroundColor: '#f8f8f8'}}>
          <Card style={{ backgroundColor: '#f8f8f8'}}>
            <Image source={{uri: `${playerImgUrl}`}} style={{ height: 260, width: null, borderRadius: 12, margin: 10  }}/>
            <CardItem style={{ backgroundColor: '#383838', borderRadius: 12, margin: 10 }}>
              <Left>
                <Thumbnail source={{ uri: `${playerClubLogo}`}} />
                <Body>
                  <Text title style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }} >{playerFirstName} {playerLastName}</Text>
                  <Text note style={{ color: 'white' }}>{playerClubCurrent}</Text>
                  <Text note style={{ color: 'grey'}} >{playerPosition}</Text>
                  <Text note style={{ color: 'grey'}} >Age: {playerAge}</Text>
                  <Text note style={{ color: 'grey'}} >Height: {playerHeightCms}</Text>
                  <Text note style={{ color: 'grey'}} >Weight: {playerWeightKg}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ backgroundColor: '#f8f8f8'}}>
            <CardItem cardBody style={{ backgroundColor: '#383838', borderRadius: 12, margin: 10 }}>
              <View style={{padding: 10}}>
                <Text style={{ color: 'white', fontWeight: 'bold', paddingBottom: 7 }}>Description</Text>
                <Text style={{ color: 'grey' }}>{PlayerDescription}</Text>
              </View>
            </CardItem>
          </Card>
          <Card>
            <YouTube
              playlistId={PlayerYoutubePlaylistId}   // The YouTube video ID
              play={false}             // control playback of video with true/false
              fullscreen={false}       // control whether the video should play in fullscreen or inline
              loop={false}             // control whether the video should loop when ended
              apiKey="AIzaSyDa74OaPhgtQ1oayWSxf4pSz7TfX_doLOU"
              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}
              style={{ alignSelf: 'stretch', height: 300, borderRadius: 12, margin: 10  }}
            />
          </Card>
        </Content>
      </Container>
    );
  }
}

export default PlayerPage;
