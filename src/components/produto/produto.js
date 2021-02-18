import React from 'react';
import { View, Image, Text } from 'react-native';

import css from '../../../assets/css/Css';

export default function Produto(props) {
	return (
		<View style={css.container2}>
			<Image style={css.ImagemProduto} source={props.image} />
			<View>
				<Text style={{ color: '#fff', fontSize: 15, textAlign: 'center' }}>
					{props.description}
				</Text>
				<Text style={{ color: '#cb6120', fontSize: 20, textAlign: 'center' }}>
					R$: {props.price}
				</Text>
			</View>
		</View>
	);
}
