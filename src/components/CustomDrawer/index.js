import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerItemList } from '@react-navigation/drawer'
import { vh } from 'react-native-expo-viewport-units';


function CustomDrawer({...props}){
  return(
    <View style={styles.container}>
      
      <DrawerItemList {...props} activeTintColor='#fff' activeBackgroundColor='#cb6120' inactiveTintColor='rgba(999, 999, 999, .87)' />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'rgba(29, 29, 29, 0.9)',
    height: vh(100),
    color:'#fff',
  },
  
})

export default CustomDrawer;