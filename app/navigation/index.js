import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import FirstScreen from '../screens/FirstScreen';
import Home from '../screens/Home';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

const PrimaryNavigator = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <PrimaryNavigator.Navigator
          headerMode={{}}
          initialRouteName="FirstScreen">
          <PrimaryNavigator.Screen name="FirstScreen" component={FirstScreen} />
          <PrimaryNavigator.Screen name="Home" component={Home} />
          <PrimaryNavigator.Screen name="Signin" component={Signin} />
          <PrimaryNavigator.Screen name="Signup" component={Signup} />
        </PrimaryNavigator.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
