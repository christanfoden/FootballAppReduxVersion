import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
    containerStyle: {
      borderBottomWidth: 1,
      padding: 10,
      backgroundColor: '#f8f8f8',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#DDD',
      position: 'relative',
      borderRadius: 12
    }
};

export { CardSection };
