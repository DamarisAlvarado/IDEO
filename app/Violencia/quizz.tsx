import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';


export default function quizz(){

    return(
        <View style={{marginTop:15}}>
            <Image 
            style={{height: 370, width: "100%", resizeMode:"contain"}}
            source={}
            />
            <View style={{padding:10}}>
                <Text style={{textAlign:"center", color:"", fontSize: 20, fontWeight:"600"}}>Vive una vida sin violencia</Text>

                <View style={{padding:10, backgroundColor:"", borderRadius: 6, marginTop:15}}>
                    <View style={{alignItems:"center"}}>
                        <Text>A veces no es fácil identificar si lo que vivimos es violencia.</Text>
                        <Text>Si algo te hace sentir mal, te confunde, o te da inseguridad, este cuestionario puede ayudarte a verlo con más claridad.</Text>
                        <Text>Es confidencial, sin juicios y no implica tomar decisiones ahora</Text>
                        <Text>Es solo un paso para cuidar de ti</Text>
                        <Text>Reconocer lo que sentimos también es un acto de valentía</Text>
                    </View>
                </View>
            </View>
            <Pressable></Pressable>
        </View>
    )
}