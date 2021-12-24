import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CatItems from '../components/catItems';



const items = [
  {
    image: require('../assets/Images/Pickup.jpg'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/Images/Beditem.jpg'),
    text: 'BEDS ITEMS',
  },
  {
    image: require('../assets/Images/Cabinet.jpg'),
    text: 'CABINET ITEMS',
  },
  {
    image: require('../assets/Images/Sofaitem.jpg'),
    text: 'SOFA ITEMS',
  },
  {
    image: require('../assets/Images/Chairitem.jpg'),
    text: 'CHAIR ITEMS',
  },
  {
    image: require('../assets/Images/Kichenitem.jpg'),
    text: 'KITCHEN ITEMS',
  },
  {
    image: require('../assets/Images/Tableitem.png'),
    text: 'TABLE ITEMS',
  },
];

const Card = ({cat}) => {
  return (
    <View style={style.cardContainer}>
      <View style={style.cardImageContainer}>
        <Image
          source={cat.image}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={style.cardDetailsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
            {cat?.title}
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 13, marginTop: 4}}>{cat?.type}</Text>
          <Text style={{fontSize: 13, marginTop: 4}}>{cat?.price}</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
};

const FurnitureItems = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const [fliteredCat, setfliteredCat] = React.useState([]);

  const fliterCat = index => {
    const currentCat = CatItems.filter(
      item => item?.cat?.toUpperCase() == items[index].text,
    )[0]?.CatItems;
    setfliteredCat(currentCat);
  };
  React.useEffect(() => {
    fliterCat(0);
  }, []);

  const ListCategories = () => {
    return (
      <View
        style={{
          marginTop: 15,
          paddingVertical: 10,
          paddingLeft: 20,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <View
              key={'cat' + index}
              style={{alignItems: 'center', marginRight: 30}}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategoryIndex(index);
                  fliterCat(index);
                }}
                style={[
                  style.categoryBtn,
                  {
                    backgroundColor:
                      selectedCategoryIndex == index ? '#707070' : '#ffff',
                  },
                ]}>
                <Image
                  source={item.image}
                  style={{
                    width: 50,
                    height: 40,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <ListCategories />
      </View>
      <FlatList
        data={fliteredCat}
        renderItem={({item}) => <Card cat={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryBtn: {
    height: 45,
    width: 100,
    marginRight: 5,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  cardContainer: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: '#ffff',
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 130,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
});

export default FurnitureItems;
