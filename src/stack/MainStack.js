import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login/Login'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        title: 'Series!',
        headerStyle: {
          backgroundColor: '#6ca2f7',
          borderBottomWidth: 1,
          borderBottomColor: '#c5c5c5'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          color: '#fff'
        }
      }}
    >
      <Stack.Screen name='Login' component={Login} options={{title: 'Bem vindo!'}} />
    </Stack.Navigator>
  )
} 

export default MainStack