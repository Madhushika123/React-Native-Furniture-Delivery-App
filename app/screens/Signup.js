import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Signup = () => {
  return (
    <SafeAreaView
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
            <TextInput placeholder="Email" style={styles.inputcontent} />
          </View>
          <View style={styles.input}>
            <TextInput
              placeholder="Password"
              style={styles.inputcontent}
              secureTextEntry
            />
          </View>
          <TouchableOpacity>
            <View style={styles.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign Up
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
            All ready have account.   
          </Text>
          <TouchableOpacity>
            <Text style={{color: 'red', fontWeight: 'bold'}}>  Sign in  </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

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
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
});
 