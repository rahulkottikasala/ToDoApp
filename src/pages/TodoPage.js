import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import {COLOR} from '../constants/Color';
import {addTodo, deleteTodo, getAllTodos, updateTodo} from '../../realm';

const TodoPage = ({navigation}) => {
  const [todos, setTodos] = useState(getAllTodos());
  const [input, setInput] = useState('');
  const [load, setLoad] = useState(false);

  var date = new Date();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  let time = (hours + '.' + min + '.' + sec).toString();


  let addData = data => {
    let checked = "false"
    addTodo(data + date.toString(), data, checked, time.toString());
  };
  let changeChecked = (id, data) => {
    let checked = data === "false" ? "true" : "false"; 
    console.log(id + checked);
    updateTodo(id, checked)
    setLoad(!load)
  }
  let deleteData = (data) => {
    deleteTodo(data.recordId)
    setLoad(!load)
  }

  let goToTrashPage = () => {
    navigation.navigate('TrashPage') 
  }

  return (
    <View style={{flex: 1, backgroundColor: COLOR.dark}}>
      <StatusBar
        animated={true}
        backgroundColor={COLOR.dark}
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <Header callback={goToTrashPage}/>
      <SearchBar addData={addData} input={input} setInput={setInput} />
      <List todos={todos} changeChecked={changeChecked} deleteData={deleteData}/>
    </View>
  );
};

export default TodoPage;
