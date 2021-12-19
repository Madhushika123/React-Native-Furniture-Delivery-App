/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, SafeAreaView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import FurnitureItem from '../components/FurnitureItem';
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
        <FurnitureItem />
      </ScrollView>
    </SafeAreaView>
  );
}
