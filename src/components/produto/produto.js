import React from 'react'
import { View, Image, Text }from 'react-native'

import css from '../../../assets/css/Css'

export default function Produto(props){
  return(
    <View>
      <Image style={css.ImagemProduto} source={props.image}/>  
      <View style={css.container}>
        <Text style={{color:'#fff',fontSize:15,}}>{props.description}</Text>
        <Text style={{color:'#cb6120',fontSize:20,}}>R$: {props.price}</Text>
      </View>   
    </View>
  )
}