import { HomeButton } from '@/components/HomeButton';
import { globalStyles } from '@/styles/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function menu() {
    return (
        <>
            <View style={[globalStyles.headContainer]}>
                <Image style={[globalStyles.logo2]}  source={require('../assets/images/logo.png')} />
                <Text style={[globalStyles.textTitle]}>Hey , Damaris</Text>
            </View>
            <View style={[globalStyles.gridContainer]}>
                <HomeButton estitlo='container' onPress={() => router.push('/perfil')} label='Perfil' Image={'perfil'} />
                <HomeButton estitlo='container' onPress={() => router.push('/Mapa/mapa')} label='Mapa' Image={'mapa'} />
                <HomeButton estitlo='container' onPress={() => router.push('/violencia')} label='Violencia' Image={'violencia'}/>
                <HomeButton estitlo='container' onPress={() => console.log('hola')} label='Información' Image={'informacion'}/>
            </View>
        </>
    )
}

