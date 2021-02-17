import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { vh } from 'react-native-expo-viewport-units';

import Hamburguer from '../../Menu/Menu'

export default function Home({ navigation }){
  return(
    <View style={styles.Fundo}>
      <TouchableOpacity style={styles.Botao} onPress={() => navigation.toggleDrawer()}>
        <Hamburguer />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.Texto}>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  )
}
//rgba(128, 128, 128, 0.596)

//rgba(29, 29, 29, 0.9)
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(29, 29, 29, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:10,
    height: vh(100),
   
  },
  Texto:{
    color:'#fff',
  },

  Fundo:{
    backgroundColor: 'rgb(29, 29, 29)'
  },

  Botao:{
    marginVertical:15,
    marginHorizontal:15,
    alignItems:'flex-end',
    
  },
});
