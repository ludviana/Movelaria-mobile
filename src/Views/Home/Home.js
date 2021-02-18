import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import css from '../../../assets/css/Css';

import Menu from '../../components/Menu/Menu';
import { useFonts } from 'expo-font';

export default function Home({ navigation }) {
	const [loaded] = useFonts({
		ubuntu: require('../../../assets/fonts/Ubuntu-Bold.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View style={css.Fundo}>
			<View style={css.Top}>
				<Image
					style={css.logo}
					source={require('../../../assets/img/LogoMovelaria.png')}
				/>
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<Menu />
				</TouchableOpacity>
			</View>

			<View style={css.container}>
				<Image
					style={css.intro}
					source={require('../../../assets/img/intro.png')}
				/>
				<View style={css.icons}>
					<Image
						style={css.icon1}
						source={require('../../../assets/img/entrega-01.png')}
					/>
					<Text style={[css.Texto, { fontFamily: 'ubuntu' }]}>
						Entrega Rápida
					</Text>
				</View>
				<View style={css.icons}>
					<Image
						style={css.icon2}
						source={require('../../../assets/img/garantia-01-01.png')}
					/>
					<Text style={[css.Texto, { fontFamily: 'ubuntu' }]}>
						Qualidade Garantida
					</Text>
				</View>
			</View>
		</View>
	);
}
