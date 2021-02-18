import React from 'react';
import { View, Image } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

import css from '../../../assets/css/Css';

function CustomDrawer({ ...props }) {
	return (
		<View style={css.containerDrawer}>
			<Image
				style={css.logoDrawer}
				source={require('../../../assets/img/LogoMovelaria.png')}
			/>
			<DrawerItemList
				{...props}
				activeTintColor='#fff'
				labelStyle={{ fontSize: 20 }}
				activeBackgroundColor='#cb6120'
				inactiveTintColor='rgba(999, 999, 999, .87)'
			/>
		</View>
	);
}

export default CustomDrawer;
