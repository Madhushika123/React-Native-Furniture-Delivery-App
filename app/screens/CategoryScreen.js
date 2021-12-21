import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CategoryHeader from '../components/CategoryHeader';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <CategoryHeader />
      </View>
      <View>
        <HeaderTabs />
        <SearchBar />
      </View>
      <View>
        <Categories />
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
