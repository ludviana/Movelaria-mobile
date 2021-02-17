import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

import Hamburguer from '../../Menu/Menu'

export default function Produtos({ navigation }){
  return(
    <View>
      <TouchableOpacity style={styles.Botao} onPress={() => navigation.toggleDrawer()}>
        <Hamburguer />
      </TouchableOpacity>
    <View style={styles.container}>
      <Text>Pagina de Produtos!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>Home</Text></TouchableOpacity>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Botao:{
    marginVertical:15,
    marginHorizontal:15,
    alignItems:'flex-end',
  },
});