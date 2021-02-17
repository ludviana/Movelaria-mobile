import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Hamburguer(){
  return(
    <View >
        <View style={styles.Menu}></View>
        <View style={styles.Menu}></View>
        <View style={styles.Menu}></View>
    </View>
  )
}

const styles = StyleSheet.create({
   Menu:{
    width: 33,
    height: 4,
    marginBottom: 5,
    position:'relative',
    backgroundColor: '#cb6120',
    borderRadius: 3,
    zIndex: 1,
   }
})