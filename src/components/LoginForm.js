import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
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
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    // console.log(this.props)
    return(
      <Container >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Card style={{backgroundColor: '#383838', borderRadius: 12, margin: 10}}>
            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center', width: null, paddingTop: 30}}>
              <Image source={require('../img/tmgLogo.png')} style={{alignSelf: 'center', height: 50, width: 200 }}/>
            </CardItem>
            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center'}}>
              <View>
                <Text style={{color: '#f8f8f8', fontWeight: 'bold', fontSize: 15, paddingBottom: 7, textAlign: 'center'}}>Private player portfolio</Text>
                <Text style={{color: '#f8f8f8', textAlign: 'center'}}>Please insure you have legal consent of the fund/agent before accessing.</Text>
              </View>
            </CardItem>
            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center', width: null, paddingTop: 35}}>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardItem>
            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center', width: null}}>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardItem>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center', width: null}}>
              {this.renderButton()}
            </CardItem>

            <CardItem style={{backgroundColor: '#383838', alignSelf: 'center'}}>
              <View style={{paddingTop: 20}}>
                <Text style={{color: '#f8f8f8', fontWeight: 'bold', fontSize: 10, paddingBottom: 7, textAlign: 'center'}}>©2018 TMG Football Limited</Text>
              </View>
            </CardItem>
          </Card>
        </View>
      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
