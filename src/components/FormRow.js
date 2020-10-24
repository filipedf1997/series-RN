import React from 'react'
import { View, StyleSheet } from 'react-native'

const FormRow = ({children, first, last}) => {
  return(
    <View style={[styles.container, first && styles.first, last && styles.last]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    elevation: 1
  },
  first: {
    marginTop: 10,
  },
  last: {
    marginBottom: 10
  }
})

export default FormRow