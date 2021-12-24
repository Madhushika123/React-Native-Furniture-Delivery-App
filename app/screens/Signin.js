import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSigning = async () => {
    if (!email || !password) {
      Alert.alert('please fil all the fields');
      return;
    }
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log(result.user);
      navigation.replace('FirstScreen');
    } catch (err) {
      Alert.alert('something went wrong please try different password');
    }
  };
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: '#ADD8E6'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 80}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: '#800000'}}>
            Welcome To Online Store,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: '#808080'}}>
            Sign in to continue
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <View style={styles.input}>
            <TextInput
              placeholder="Email"
              value={email}
              mode="outlined"
              onChangeText={text => setEmail(text)}
              style={styles.inputcontent}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              value={password}
              mode="outlined"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              style={styles.inputcontent}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 100,
            marginBottom: 50,
          }}>
          <Text style={{color: '#808080', fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: 'red', fontWeight: 'bold'}}> Sign up </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputcontent: {
    color: 'white',
    paddingLeft: 30,
    borderBottomWidth: 2,
    borderColor: '#00008B',
    // eslint-disable-next-line no-dupe-keys
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  btnPrimary: {
    backgroundColor: '#28388f',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});
