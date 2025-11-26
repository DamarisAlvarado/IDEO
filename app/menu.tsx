import { HomeButton } from '@/components/HomeButton';
import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function Menu() {
    // Obtener el parámetro de nombre de usuario desde la URL y desde la pagina de login
    const searchParams = useSearchParams();
    const username = searchParams.get('username');
    
    return (
        <>
            <View style={[globalStyles.headContainer]}>
                <Image style={[globalStyles.logo2]}  source={require('../assets/images/logo.png')} />
                <Text style={[globalStyles.textTitle]}>Hey , {username}</Text>
            </View>
            <View style={[globalStyles.gridContainer]}>
                <HomeButton estitlo='container' onPress={() =>  router.push({ pathname: "/perfil", params: { username: username } }) } label='Perfil' Image={'perfil'} />
                <HomeButton estitlo='container' onPress={() => router.push('/Mapa/mapa')} label='Mapa' Image={'mapa'} />
                <HomeButton estitlo='container' onPress={() => router.push('/violencia')} label='Violencia' Image={'violencia'}/>
                <HomeButton estitlo='container' onPress={() => router.push('/informacion')} label='Información' Image={'informacion'}/>

            </View>
            <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
        </>
    )
}

