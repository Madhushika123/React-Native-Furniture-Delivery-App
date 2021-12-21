import React from 'react';
import {View, SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';

export default function HeaderTab() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: 'gray',
          height: 170,
          paddingHorizontal: 50,
        }}>
      </View>
    </SafeAreaView>
  );
};


