import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from "react-native";

type ImageKey = 'perfil' | 'mapa' | 'violencia' | 'informacion' | 'inicio'| 'btnalerta'| 'violentometro'|'centros';
interface Props{
    label: string;
    Image: ImageKey;
    onPress: () => void;
    estitlo: keyof typeof globalStyles;
}

const img = {
    perfil: require('../assets/images/perfil.png'),
    mapa: require('../assets/images/mapa.jpg'),
    violencia: require('../assets/images/violencia.jpg'),
    informacion: require('../assets/images/informacion.jpg'),
    inicio: require('../assets/images/inicio.jpg'),
    btnalerta: require('../assets/images/botonalerta.png'),
    violentometro: require('../assets/images/violento.png'),
    centros: require('../assets/images/centros.jpg'),
}

export function HomeButton ({ label , Image, estitlo,onPress} : Props) {
    return (
         <ImageBackground source={img[Image]} style={globalStyles[estitlo] as any}>

            <View style={[globalStyles.overlay]}>
                <Pressable onPress={onPress}style={({ pressed }) => [{  justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%' },
                pressed ? { opacity: 0.7 } : { opacity: 1 },]} >
                <Text style ={[globalStyles.TituloMenu]}>{label}</Text>
            </Pressable>
            </View>

         </ImageBackground>
        
            
    )
}

