import React from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';

import css from '../../../assets/css/Css';
import Menu from '../../components/Menu/Menu';

export default function Login({ navigation }) {
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

			<View style={[css.container, { marginVertical: 90 }]}>
				<Text style={[css.Texto, { fontSize: 30 }]}>Login</Text>
				<TextInput
					placeholder='Nome usuário'
					placeholderTextColor='#fff'
					style={css.input}
				/>
				<TextInput
					placeholder='Senha'
					placeholderTextColor='#fff'
					secureTextEntry={true}
					style={css.input}
				/>
				<TouchableOpacity
					style={css.Entrar}
					onPress={() => navigation.navigate('Produtos')}
				>
					<Text style={[css.Texto, { textAlign: 'center' }]}>Entrar</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
