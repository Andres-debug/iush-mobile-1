import React from "react";
import {Text,View} from 'react-native'

export const Saludo =(props)=>{
  return(
    <Text>
        Hola, {props.nombre}
    </Text>
  )
}