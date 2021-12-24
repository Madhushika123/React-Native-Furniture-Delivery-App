import React from 'react';
import {View, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';


export default function HeaderTab() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'gray',
          height: 150,
          paddingHorizontal: 20,
        }}></View>
    </SafeAreaView>
  );
}

