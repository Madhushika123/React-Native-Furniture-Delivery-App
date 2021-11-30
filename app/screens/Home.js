import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'grey', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
