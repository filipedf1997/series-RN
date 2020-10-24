import React, { useEffect, useState } from 'react'
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Button, 
  ActivityIndicator, Text,
  Alert 
} from 'react-native'
import FormRow from '../../components/FormRow'
import firebase from 'firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDtAXn7ZKTwedyL_vnCkUAJxMvdM-g17mo",
      authDomain: "seriasrn.firebaseapp.com",
      databaseURL: "https://seriasrn.firebaseio.com",
      projectId: "seriasrn",
      storageBucket: "seriasrn.appspot.com",
      messagingSenderId: "118496344581",
      appId: "1:118496344581:web:3827b9a2654ee1cb763a6c"
    }
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig)
    }
  }, [])

  const pressHandler = () => {
    setLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => Alert.alert(null, 'Deu bom'))
      .catch(() => Alert.alert(null, 'Deu ruim ó'))
      .finally(() => setLoading(false))    
  }

  return (
    <View>
      <FormRow first>
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </FormRow>
      <FormRow last>
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry
          value={password}
          onChangeText={value => setPassword(value)}
        />
      </FormRow>
      { loading ?
        <ActivityIndicator color='#6ca2f7' size='large' /> :
        <Button title='Logar' onPress={pressHandler} />
      }
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