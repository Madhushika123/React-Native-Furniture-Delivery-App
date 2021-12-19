import React from 'react';
import {View, Image, Text} from 'react-native';

export default function FurnitureItem() {
  return (
    <View style={{marginTop: 10, padding: 15, backgroundColor: "black"}}>
      <FurnitureImage />
      <FurnitureInfo />
    </View>
  );
}

const FurnitureImage = () => (
  <Image
    source={require('../assets/Images/furniture1.jpg')}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{width: '100%', height: 180}}
  />
);

const FurnitureInfo = () => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        Sankalpana Furniture House, Bingiriya Road - Bowaththa
      </Text>
    </View>
  </View> 
);
