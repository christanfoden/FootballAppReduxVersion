import React, { Component } from 'react';

class data extends Component {
  getData() {
    return fetch('https://tmgfootball-a704b.firebaseio.com/.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  Render() {
    return getData
  }

}

export default data;
