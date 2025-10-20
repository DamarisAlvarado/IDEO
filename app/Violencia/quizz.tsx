import { globalStyles } from '@/styles/globalStyles';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

export default function Quizz() {
    return (
    <View style={{ marginTop: 15, flex: 1, alignItems: 'center' }}>
        <Image
        style={{ height: 370, width: '100%', resizeMode: 'contain' }}
        source={require('../../assets/images/noviolencia.jpg')}
        />
    <View style={{ padding: 10, width: '90%' }}>
        <Text style={[globalStyles.textTitle]}>Vive una vida sin violencia</Text>

        <View style={{ padding: 10, borderRadius: 6, marginTop: 15 }}>
            <Text style={[globalStyles.parrafos]}>A veces no es fácil identificar si lo que vivimos es violencia.</Text>
            <Text style={[globalStyles.parrafos]}>Si algo te hace sentir mal, te confunde, o te da inseguridad, este cuestionario puede ayudarte a verlo con más claridad.</Text>
            <Text style={[globalStyles.parrafos]}>Es confidencial, sin juicios y no implica tomar decisiones ahora</Text>
            <Text style={[globalStyles.parrafos]}>Es solo un paso para cuidar de ti</Text>
            <Text style={[globalStyles.parrafos]}>Reconocer lo que sentimos también es un acto de valentía</Text>
        </View>
    </View>
    <Pressable
        style={({ pressed }) => [
        globalStyles.btonlogin,
        pressed ? { opacity: 0.7 } : { opacity: 1 },
        ]}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Comenzar</Text>
    </Pressable>
    </View>
    );
}
