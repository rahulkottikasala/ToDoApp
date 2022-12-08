import React from 'react'
import TodoPage from './src/pages/TodoPage'

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import TrashPage from './src/pages/TrashPage'
// const Stack = createStackNavigator()

// const MyStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name='TodoPage' component={TodoPage} options={{headerShown:false}} />
//     <Stack.Screen name='TrashPage' component={TrashPage} options={{headerShown:false}} />
//   </Stack.Navigator>
// )

const App = () => {
  return (
    // <NavigationContainer>
   <TodoPage/>
    // </NavigationContainer>
  )
}

export default App