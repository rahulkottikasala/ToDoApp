import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../constants/Color';
const {width} = Dimensions.get('window');

const Header = ({callback, trash}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: 70,
        backgroundColor:COLOR.dark,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: COLOR.mediumBlue}}>{trash ? "Trash Page" : "TODO"}</Text>
      <TouchableHighlight style={{width:50, height:50, borderRadius:50, alignItems:'center', justifyContent:'center'}} underlayColor={COLOR.lightShade} onPress={() => callback()}>
     <Icon name="delete-sweep" size={30} color={COLOR.mediumBlue}/>
      </TouchableHighlight>
    </View>
  );
};

export default Header;
