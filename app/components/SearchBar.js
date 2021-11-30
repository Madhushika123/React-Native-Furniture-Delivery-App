import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

export default function SearchBar() {
  return (
    <View style={{marginTop: 25, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'grey',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
