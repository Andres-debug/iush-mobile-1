import React, {useEffect, useState} from 'react'
import {View,Text,Image,Button,StyleSheet, FlatList} from 'react-native';
import User from '../../assets/user.png'
import axios from 'axios'


const Avatar =()=>{
    return(
        <Image 
        source={User}
        style={styles.avatar}
        />
    )
}

const InformacionUsuario = ({nombre,email})=>{
    return(
        <View style={styles.infoContainer}>
            <Text style={styles.nombre}>{nombre}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    )
}

export const PerfilUsuario=()=>{
    const [siguiendo,setSiguiendo]=useState(false);
    const [usuarios,setUsuarios]=useState([])

    const obtenerUsuarios = async () =>{
        try{
            const response = await axios.get('https://randomuser.me/api/?results=10');
            setUsuarios(response.data.results);
        }catch(error){
            console.error("Error al obtener los usuarios",error)
        }
    }

    useEffect(()=>{
        obtenerUsuarios()
        console.log(obtenerUsuarios())
    },[])



    const manejarSeguimiento=()=>{
        setSiguiendo(!siguiendo);
        console.log(siguiendo)
    };

    const renderUsuario=({item})=>{
        <View style={styles.container}>
            <Avatar/>
            <InformacionUsuario nombre={`${item.name.first}`} email={`${item.email}`}/>
            <Button
            title={siguiendo ? 'Dejar de Seguir':'Seguir'}
            onPress={()=>manejarSeguimiento()}/>
        </View>
    }

    return(
        <FlatList data={usuarios} renderItem={renderUsuario} keyExtractor={item=> item.email}/>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20,
        backgroundColor:"#fff",
        borderRadius:10,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        shadowRadius:5,
        elevation:5,
        marginVertical:10,

    },
    avatar:{
        width: 100,
        height:100,
        borderRadius:50,
        marginBottom:20
    },
    infoContainer:{
        alignItems:'center',
        marginBottom:20
    },
    nombre:{
        fontSize:18,
        fontWeight:'bold'
    },
    email:{
        fontSize:14,
        color:'gray'
    }
})