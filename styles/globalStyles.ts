import { StyleSheet } from "react-native";

export  const globalStyles = StyleSheet.create({
    Background:{
       flex:1,
       backgroundColor: '#D8DCDC',
    },
    contenedorP:{
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        
    },
    LogoPrin:{
        justifyContent:'center',
        width:200,
        height: 240,
        resizeMode: "contain" 
    },
    Inputs:{
        padding:10,
        margin:15,
        height:50,
        width :'100%',
        borderColor:'black',
        borderWidth: 1,
        borderRadius:10,
    },
    BotonesG:{
        backgroundColor:'red'

    }

});