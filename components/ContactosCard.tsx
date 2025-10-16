import { globalStyles } from "@/styles/globalStyles";
import React from "react";
import { Image, Text, View } from "react-native";

export default function ContactosCard() { 
    return ( 
    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "pink", padding: 10, borderRadius: 10, width: "70%" , margin:10}}> 
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginRight:15}}> 
        <Image style={globalStyles.Contacto} source={require('../assets/images/botonalerta.png')} />
         </View> 
         
         <View style={{ flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start"}}>
             <Text>Damaris Alvarado</Text> 
             <Text>1236457485</Text>
             
              </View> 
              </View> 
             
            ); }