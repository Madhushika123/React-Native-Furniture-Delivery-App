import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items = [
  {
    image: require('../assets/Images/Pickup.jpg'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/Images/Beditem.jpg'),
    text: 'Beds Items',
  },
  {
    image: require('../assets/Images/Cabinet.jpg'),
    text: 'Cabinet Items',
  },
  {
    image: require('../assets/Images/Sofaitem.jpg'),
    text: 'Sofa Items',
  },
  {
    image: require('../assets/Images/Chairitem.jpg'),
    text: 'Chair Items',
  },
  {
    image: require('../assets/Images/Kichenitem.jpg'),
    text: 'Kitchen Items',
  },
  {
    image: require('../assets/Images/Tableitem.png'),
    text: 'Table Items',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 10,
        paddingVertical: 10,
        paddingLeft: 20,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
