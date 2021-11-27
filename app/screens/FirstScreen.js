import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 400}}>
          <Image
            style={styles.image}
            source={require('../assets/Images/image.png')}
          />
        </View>
        <View>
          <Text style={styles.HomeTopic}> Best Luxury Furnitures Online Store</Text>
        </View>
        <View>
          <Text style={styles.Hometext}>
            .....Luxury furniture from us for a your comfortable life.....
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttontext}> Get Started </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default FirstScreen;

const styles = StyleSheet.create({
  textcontainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    top: 260,
    marginTop: -90,
    marginRight: 100,
  },
  HomeTopic: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    marginTop: -360,
  },
  Hometext: {
    marginTop: -250,
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  buttoncontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
  },
  button: {
    width: 290,
    height: 65,
    borderRadius: 75,
    backgroundColor: '#ed5151',
    marginTop: 290,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    letterSpacing: -0.39,
    opacity: 20,
    marginTop: 20,
  },

});