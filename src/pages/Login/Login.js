import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import FormRow from '../../components/FormRow'

const Login = () => {
  return (
    <View>
      <FormRow>
        <TextInput 
          style={StyleSheet.input}
          placeholder='E-mail'
        />
      </FormRow>
      <FormRow>
        <TextInput 
          style={StyleSheet.input}
          placeholder='Senha'
          secureTextEntry
        />
      </FormRow>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    paddingBottom: 5    
  }
})

export default Login