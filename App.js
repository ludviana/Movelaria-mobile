import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './src/Views/Home/Home';
import Produtos from './src/Views/Produtos/Produtos';
import Login from './src/Views/Login/Login';

import CustomDrawer from './src/components/CustomDrawer/index';

function App() {
	return (
		<NavigationContainer>
			<StatusBar style='auto' hidden />
			<Drawer.Navigator initialRouteName='Login' drawerContent={CustomDrawer}>
				<Drawer.Screen name='Home' component={Home} />
				<Drawer.Screen name='Produtos' component={Produtos} />
				<Drawer.Screen name='Login' component={Login} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

export default App;
