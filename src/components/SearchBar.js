import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from '../constants/Color';
const {width} = Dimensions.get('window');

const SearchBar = ({addData, input, setInput}) => {
  return (
    <View
      style={{
        width: width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}>
      <TextInput
        style={{
          width: '80%',
          height: 50,
          fontSize: 16,
          fontWeight: '400',
          color: COLOR.mediumBlue,
          paddingHorizontal: 10,
          borderBottomColor: COLOR.mediumBlue,
          borderBottomWidth: 1,
        }}
        maxLength={45}
        placeholder="Create a note ....."
        placeholderTextColor={COLOR.mediumBlue}
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => {
          addData(input);
          setInput('')
        }}
      />
      <TouchableHighlight
        style={{
          width: 60,
          height: 35,
          backgroundColor: COLOR.mediumBlue,
          marginTop: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        underlayColor={COLOR.underlayColor}
        onPress={() => setInput('')}>
        <Text style={{fontSize: 12, fontWeight: '600', color: COLOR.dark}}>
          Clear
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default SearchBar;
