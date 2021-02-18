import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import css from '../../../assets/css/Css';

import Menu from '../../components/Menu/Menu';

import Produto from '../../components/produto/produto'

const DATA = [
  {
    id:1,
    description:'Guarda-Roupa 6 portas',
    image:require('../../components/produto/img/guarda2.jpg'),
    price:2500.00
  },
  {
    id:2,
    description:'Guarda-Roupa solteiro',
    image:require('../../components/produto/img/guarda4.jpeg'),
    price:1800.00
  },
  {
    id:3,
    description:'Guarda-Roupa portas de correr',
    image:require('../../components/produto/img/guarda3.jpg'),
    price:2100.00
  },
  {
    id:4,
    description:'Cozinha Completa',
    image:require('../../components/produto/img/cozinha.jpg'),
    price:1450.00
  },
  {
    id:5,
    description:'Cozinha Completa',
    image:require('../../components/produto/img/cozinha2.png'),
    price:1200.00
  },
  {
    id:6,
    description:'Cozinha Completa',
    image:require('../../components/produto/img/cozinha3.jpg'),
    price:1900.00
  },
  {
    id:7,
    description:'Painel de Tv',
    image:require('../../components/produto/img/home.jpg'),
    price:987.00
  },
  {
    id:8,
    description:'Armario Alto',
    image:require('../../components/produto/img/armamulti.jpg'),
    price:698.00
  },
]

export default function Produtos({ navigation }) {
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
				{/* <Produto image={DATA[0].image} description={DATA[0].description} price={DATA[0].price}/> */}
        <Produto image={DATA[1].image} description={DATA[1].description} price={DATA[1].price}/>
			</View>

		</View>
	);
}
