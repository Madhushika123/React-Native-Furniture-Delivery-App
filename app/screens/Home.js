/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';


export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'grey', padding: 15}}>
        <HeaderTabs />
      </View>
      
    </SafeAreaView>
  );
}
