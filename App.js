import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './src/Views/Home/Home'
import Produtos from './src/Views/Produtos/Produtos'

import CustomDrawer from './src/components/CustomDrawer/index'

function App() {
  
  return (
    <NavigationContainer>
      <StatusBar style="auto" hidden />
      <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawer}>
        <Drawer.Screen name='Home' component={Home} options={{title: 'Movelaria'}}/>
        <Drawer.Screen name='Produtos' component={Produtos}/>
      </Drawer.Navigator> 
    </NavigationContainer>
  );
}

export default App




