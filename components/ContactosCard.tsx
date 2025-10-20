import { globalStyles } from "@/styles/globalStyles";
import React from "react";
import { Image, Text, View } from "react-native";

export default function ContactosCard({nombre ,apellido, telefono}: {nombre: string; apellido: string; telefono: string}) { 
    return ( 
    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "pink", padding: 10, borderRadius: 10, width: "70%" , margin:10}}> 
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginRight:15}}> 
        <Image style={globalStyles.Contacto} source={require('../assets/images/botonalerta.png')} />
         </View> 
         
         <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}}>
             <Text>{nombre} {apellido}</Text> 
             <Text>{telefono}</Text>
             
              </View> 
              </View> 
             
            ); }