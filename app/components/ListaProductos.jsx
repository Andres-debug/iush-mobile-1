import React from "react";
import {View,Text,FlatList,StyleSheet} from 'react-native'

export const ListaProductos=()=>{

    const productos = [
        {id:'1',nombre:'Manzanas',precio:'3000'},
        {id:'2',nombre:'Fresas',precio:'2000'},
        {id:'3',nombre:'Uvas',precio:'1000'},
        {id:'4',nombre:'Naranjas',precio:'3000'},
    ]

    const renderProducto =({item})=>(
        <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre} </Text>
            <Text style={styles.precio}>{item.precio} </Text>
        </View>
    )


    return(
        <View style={styles.container}>
            <FlatList data={productos} renderItem={renderProducto} keyExtractor={item=>item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9'
    },
    item:{
        backgroundColor:'#fff',
        padding:20,
        marginVertical:8,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#ddd'
    },
    nombre:{
        fontSize:18,
        fontWeight:'bold'
    },
    precio:{
        fontSize:16,
        color:'green'
    }


})