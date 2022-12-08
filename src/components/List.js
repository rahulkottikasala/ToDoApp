import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../constants/Color';
const {width, height} = Dimensions.get('window');

const List = ({todos, changeChecked, deleteData}) => {
  return (
    <View style={{height: height - 150, paddingVertical: 20}}>
      <ScrollView
        style={{
          width: width,
          // height: height - 130,
          backgroundColor: COLOR.dark,
          paddingHorizontal: 20,
          paddingVertical: 30,
        }}>
        {[...todos].reverse().map((item, index) => (
          <View
            key={index}
            style={{
              width: width - 40,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: COLOR.mediumBlue,
              marginBottom: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
              <CheckBox
                tintColors={{true: COLOR.dark, false: COLOR.dark}}
                value={item.checked === 'false' ? false : true}
                onValueChange={() => changeChecked(item.recordId, item.checked)}
              />
  
            
              <View style={{width: '70%'}}>
                <Text
                  style={[
                    {fontSize: 15},
                    item.checked === 'true'
                      ? {
                          textDecorationLine: 'line-through',
                          color: COLOR.dark,
                          fontWeight: '400',
                        }
                      : {color: COLOR.dark, fontWeight: '500'},
                  ]}>
                  {item.data}
                </Text>
              </View>
            <TouchableHighlight
              style={{
                width: 40,
                height: 40,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              underlayColor={COLOR.underlayColor}
              onPress={() => deleteData(item)}>
              <Icon name="delete" color={COLOR.dark} size={25} />
            </TouchableHighlight>
          </View>
        ))}

        {/* Empty component for space */}
        <View style={{height: 30}} />
      </ScrollView>
    </View>
  );
};

export default List;
