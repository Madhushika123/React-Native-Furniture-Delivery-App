import React from 'react';
import {View, Image} from 'react-native';

export default function BottomTab() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 30, height: 30, resizeMode: 'contain'}}
        source={require('../assets/Icons/homeicon.png')}
      />
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 30, height: 30, resizeMode: 'contain'}}
        source={require('../assets/Icons/searchicon.png')}
      />
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 30, height: 30, resizeMode: 'contain'}}
        source={require('../assets/Icons/ordericon.png')}
      />
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 30, height: 30, resizeMode: 'contain'}}
        source={require('../assets/Images/nextB.png')}
      />
    </View>
  );
}
