import { StyleSheet } from 'react-native';
import { vh, vw } from 'react-native-expo-viewport-units';

const Css = StyleSheet.create({
	container: {
		backgroundColor: 'rgba(29, 29, 29, 0.9)',
		alignItems: 'center',
		paddingTop: 5,
		height: vh(100),
	},

	Top: {
		display: 'flex',
		flexDirection: 'row',
		marginVertical: 5,
		marginHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	Texto: {
		color: '#fff',
		textAlign: 'justify',
		fontSize: 17,
	},

	Fundo: {
		backgroundColor: 'rgb(29, 29, 29)',
	},

	Menu: {
		width: 33,
		height: 4,
		marginBottom: 5,
		position: 'relative',
		backgroundColor: '#cb6120',
		borderRadius: 3,
		zIndex: 1,
	},

	containerDrawer: {
		backgroundColor: 'rgba(29, 29, 29, 0.9)',
		height: vh(100),
		color: '#fff',
	},

	logo: {
		width: vw(35),
		height: vh(7),
		marginVertical: 20,
	},

	logoDrawer: {
		width: vw(38),
		height: vh(8),
		marginVertical: 20,
		marginHorizontal: 10,
		paddingHorizontal: 10,
		paddingVertical: 20,
	},

	intro: {
		width: vw(90),
		height: vh(35),
		borderRadius: 25,
		marginVertical: 30,
	},

	icon1: {
		width: vw(12),
		height: vh(5),
		marginVertical: 10,
		marginRight: 82,
	},

	icon2: {
		width: vw(9),
		height: vh(7),
		marginVertical: 10,
		marginRight: 52,
	},

	icons: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		marginVertical: 10,
		padding: 20,
	},

	ImagemProduto:{
		width:160,
		height:135
	}
});

export default Css;
