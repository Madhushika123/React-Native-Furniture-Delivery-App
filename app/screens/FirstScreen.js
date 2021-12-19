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

  onPressProfileButton = () => {
    this.props.navigation.navigate('Signin');
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{height: 400}}>
          <Image
            style={styles.image}
            source={require('../assets/Images/image.jpg')}
          />
        </View>
        <View>
          <Text style={styles.HomeTopic}>Best Luxury Furnitures</Text>
        </View>
        <View>
          <Text style={styles.Hometext}>
            ..Luxury furniture from us for a comfortable life..
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity onPress={this.onPressProfileButton}>
              <View style={styles.button}>
                <Text style={styles.buttontext}> Visit Store </Text>
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
    top: 200,
    marginTop: -90,
    marginRight: 190,
  },
  HomeTopic: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
    marginTop: -320,
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
    marginTop: 270,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    letterSpacing: -0.39,
    opacity: 20,
    marginTop: 20,
  },
});
