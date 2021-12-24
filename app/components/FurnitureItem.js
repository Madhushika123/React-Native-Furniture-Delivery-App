import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const items = [
  {
    image: require('../assets/Images/furniture1.jpg'),
    text: 'Sankalpana Furniture House,  Bingiriya Road - Bowaththa',
  },
  {
    image: require('../assets/Images/FurnitureStore.jpg'),
    text: 'Raneli Furniture Store, Kuliyapitiya Road - Migahakotuwa',
  },
  {
    image: require('../assets/Images/furniture2.jpg'),
    text: 'Dilshan Furniture Super Center, Chilaw Road - Negambo',
  },
  {
    image: require('../assets/Images/furniture3.jpg'),
    text: 'Sadushi Furniture House, Hettipola Road - Wariyapola',
  },
];

export default function FurnitureItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#555357',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index}>
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: 180,
                marginTop: 10,
              }}
            />
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
